import { SECOND } from '@/constants/time';
import axios, {
  HttpStatusCode,
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import qs from 'qs';

import { type Token } from './auth/auth-options';

axios.defaults.headers.common.Accept = '*/*';
axios.defaults.headers.common['Content-Type'] =
  'application/json;charset=UTF-8';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: SECOND * 10,
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  },
});

/**
 * @see https://github.com/nextauthjs/next-auth/discussions/3550#discussioncomment-4634562
 */
export const setAuthToken = (token: Token | null) => {
  if (!!token) {
    instance.defaults.headers.common[
      'Authorization'
    ] = `${token.tokenType} ${token.accessToken}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

function axiosRequestInterceptor(config: InternalAxiosRequestConfig) {
  // request body에 Set 객체를 넣는 경우 Array로 형변환을 해줘야한다.
  if (config.data) {
    if (
      config.headers &&
      config.headers['Content-Type'] !== 'multipart/form-data'
    ) {
      const convertedRequestBodyData: Record<string, any> = {};

      for (const dataKey of Object.keys(config.data)) {
        const dataValue = config.data[dataKey];

        if (dataValue instanceof Set) {
          convertedRequestBodyData[dataKey] = Array.from(dataValue);
        } else if (dataValue !== null && typeof dataValue === 'object') {
          for (const dataValueKey of Object.keys(dataValue)) {
            const dataValueValue = dataValue[dataValueKey];

            if (dataValueValue instanceof Set) {
              dataValue[dataValueKey] = Array.from(dataValueValue);
            }
          }
          convertedRequestBodyData[dataKey] = dataValue;
        } else {
          convertedRequestBodyData[dataKey] = dataValue;
        }
      }
      config.data = convertedRequestBodyData;
    }
  }

  return config;
}

function axiosResponseInterceptor(response: AxiosResponse) {
  return response;
}

async function axiosErrorResponseInterceptor(error: AxiosError) {
  const httpStatus = error.response?.status;

  if (httpStatus === HttpStatusCode.Unauthorized) {
    location.replace('/unauthorized');
  }

  return Promise.reject(error);
}

instance.interceptors.request.use(axiosRequestInterceptor);

instance.interceptors.response.use(
  axiosResponseInterceptor,
  axiosErrorResponseInterceptor,
);

export default instance;

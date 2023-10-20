import axiosInstance from '@/libs/axios.factory';
import { makeApi, Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';

// import { categoryApis } from './category';
// import { inventoryApis } from './inventory';
// import { productApis } from './product';
// import { receivingApis } from './receiving';
// import { releasesApis } from './releases';
// import { standardInfoApis } from './standard-info';
// import { userApis } from './user';
// import { vendorApis } from './vendor';
// import { vendorTypeApis } from './vendor-type';
// import { warehouseApis } from './warehouse';
export const API_QUERY_BASE_KEY = 'mxBoApis';
export const mxBoApis = makeApi([
  // ...userApis,
  // ...standardInfoApis,
  // ...categoryApis,
  // ...vendorApis,
  // ...vendorTypeApis,
  // ...warehouseApis,
  // ...productApis,
  // ...receivingApis,
  // ...releasesApis,
  // ...inventoryApis,
]);
export const apiClient = new Zodios(mxBoApis, {
  axiosInstance,
});
export const apiHooks = new ZodiosHooks('mxBoApis', apiClient);
// export * from '../libs/common.types';
// export * from './user';
// export * from './standard-info';
// export * from './category';
// export * from './vendor';
// export * from './vendor-type';
// export * from './warehouse';
// export * from './product';
// export * from './receiving';
// export * from './releases';
// export * from './inventory';

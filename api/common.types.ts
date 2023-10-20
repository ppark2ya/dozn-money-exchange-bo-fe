import { z } from 'zod';

export const commonPagenationValues = z.object({
  currentPage: z.number(),
  lastPage: z.number(),
  totalCount: z.number(),
  viewCount: z.number(),
});

export const returnMsg = z.object({
  msg: z.string(),
  updatedId: z.number().nullable(),
  updatedIdCount: z.number().nullable(),
});

export const pagingInfo = z.object({
  pagingInfo: commonPagenationValues,
});

export const commonErrorSchema = z.object({
  code: z.string(),
  msg: z.string(),
  data: z.object({}).optional(),
});

// 400
export const badrequest = z.object({}).merge(commonErrorSchema);

// 401
export const unauthorized = z.object({}).merge(commonErrorSchema);

// 404
export const notFound = z.object({}).merge(commonErrorSchema);

// 409
export const conflict = z.object({}).merge(commonErrorSchema);

// 422
export const unprocessableEntity = z.object({
  detail: z.array(
    z.object({
      loc: z.array(z.tuple([z.string(), z.number()])),
      msg: z.string(),
      type: z.string(),
    }),
  ),
});

// 500
export const internalServerError = z.object({}).merge(commonErrorSchema);

// 500
export const sqlFailure = z.object({}).merge(commonErrorSchema);

// export const apiDatetimeFormat = z.coerce
//   .date()
//   .transform((val) => dayjs(val).format('LLLL'));

export type CommonPagenationValuesType = z.infer<typeof commonPagenationValues>;
export type PagingInfo = z.infer<typeof pagingInfo>;
export type ReturnMsg = z.infer<typeof returnMsg>;
export type Badrequest = z.infer<typeof badrequest>;
export type Unauthorized = z.infer<typeof unauthorized>;
export type NotFoundType = z.infer<typeof notFound>;
export type Conflict = z.infer<typeof conflict>;
export type UnprocessableEntityType = z.infer<typeof unprocessableEntity>;
export type InternalServerErrorType = z.infer<typeof internalServerError>;
export type SqlFailure = z.infer<typeof sqlFailure>;
export type CommonErrorSchema = z.infer<typeof commonErrorSchema>;

import { z } from 'zod';

export const createWarehouseBody = z
  .object({
    number: z
      .string({
        required_error: '창고번호를 입력해주세요.',
        invalid_type_error: '숫자 1~99 사이로 입력해주세요.',
      })
      .max(2)
      .transform((val, ctx) => {
        const parsed = parseInt(val);
        if (isNaN(parsed)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: '숫자 1~99 사이로 입력해주세요.',
          });
          // This is a special symbol you can use to
          // return early from the transform function.
          // It has type `never` so it does not affect the
          // inferred return type.
          return z.NEVER;
        }

        return val;
      }),
    name: z.string().nonempty('창고명을 입력해주세요.'),
    storageType: z.string({
      required_error: '온도 구분을 선택해주세요.',
    }),
    size: z.string().nullish(),
  })
  .required();

export const updateWarehouseBody = z
  .object({
    name: z.string().nonempty('창고명을 입력해주세요.'),
    storageType: z.string({
      required_error: '온도 구분을 선택해주세요.',
    }),
    size: z.string().nullish(),
  })
  .required();

export const createWarehouseLineBody = z
  .object({
    warehouseId: z.number({
      description: '창고 ID',
    }),
    lineCode: z.string({
      description: '라인코드',
    }),
  })
  .required();

export const createWarehouseRackBody = z
  .object({
    warehouseLineId: z.number({
      description: '랙 코드',
    }),
    rackCode: z.string({
      description: '랙 코드',
    }),
    facilityType: z.string({
      description: '설비구분',
    }),
  })
  .required();

export const updateCellBody = z
  .object({
    name: z.string({
      description: '셀 이름',
    }),
    locationType: z.string({
      description: '로케이션 구분',
    }),
    width: z
      .number({
        description: '가로',
      })
      .nullable(),
    height: z
      .number({
        description: '세로',
      })
      .nullable(),
    vertical: z
      .number({
        description: '높이',
      })
      .nullable(),
  })
  .required();

export const createWarehouseCellBody = z
  .object({
    locationCode: z.string({
      description: '로케이션 번호',
    }),
    warehouseRackId: z.number({
      description: '랙 ID',
    }),
    name: z
      .string({
        description: '로케이션 이름',
      })
      .nonempty('로케이션 이름을 입력해주세요.'),
    locationType: z.string({
      description: '로케이션 구분',
      required_error: '로케이션 구분을 선택해주세요.',
    }),
    cellCode: z.string({
      description: '셀 코드',
    }),
    width: z
      .number({
        description: '가로',
      })
      .nullable(),
    height: z
      .number({
        description: '세로',
      })
      .nullable(),
    vertical: z
      .number({
        description: '높이',
      })
      .nullable(),
  })
  .required();

export type CreateWarehouseBody = z.infer<typeof createWarehouseBody>;
export type UpdateWarehouseBody = z.infer<typeof updateWarehouseBody>;
export type CreateWarehouseLineBody = z.infer<typeof createWarehouseLineBody>;
export type CreateWarehouseRackBody = z.infer<typeof createWarehouseRackBody>;
export type UpdateCellBody = z.infer<typeof updateCellBody>;
export type CreateWarehouseCellBody = z.infer<typeof createWarehouseCellBody>;

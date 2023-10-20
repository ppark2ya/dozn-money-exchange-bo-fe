import { pagingInfo } from '@/api/common.types';
import { z } from 'zod';

export enum WarehouseKeyword {
  Name = 'name',
  Number = 'number',
}

export const warehouse = z.object({
  warehouseId: z.number({
    description: '창고 ID',
  }),
  number: z.string({
    description: '창고 번호',
  }),
  name: z.string({
    description: '창고명',
  }),
  updaterName: z.string({
    description: '수정자',
  }),
  updatedAt: z.coerce.date({
    description: '수정일',
  }),
});

export const warehouseList = z
  .object({
    warehouseDataList: z.array(warehouse),
  })
  .merge(pagingInfo);

export const warehouseNameData = z.object({
  warehouseId: z.number({
    description: '창고 ID',
  }),
  warehouseName: z.string({
    description: '창고명',
  }),
});

export const warehouseListAll = z.object({
  warehouseNameList: z.array(warehouseNameData),
});

export const warehouseDetail = z.object({
  warehouseId: z.number({
    description: '창고 ID',
  }),
  number: z.string({
    description: '창고 번호',
  }),
  name: z.string({
    description: '창고명',
  }),
  storageType: z.string({
    description: '온도구분',
  }),
  size: z
    .number({
      description: '창고 크기',
    })
    .nullable(),
});

export const warehouseLine = z.object({
  warehouseLineId: z.number({
    description: '라인 ID',
  }),
  lineCode: z.string({
    description: '라인코드',
  }),
  rackCount: z.number({
    description: '랙 개수',
  }),
});

export const warehouseLineList = z.object({
  warehouseLineList: z.array(warehouseLine),
});

export const warehouseRack = z.object({
  warehouseRackId: z.number({
    description: '랙 아이디',
  }),
  rackCode: z.string({
    description: '랙 코드',
  }),
  facilityType: z.string({
    description: '설비구분',
  }),
  cellCount: z.number({
    description: '셀 개수',
  }),
});

export const warehouseRackList = z.object({
  warehouseRackList: z.array(warehouseRack),
});

export const warehouseCellDetail = z.object({
  name: z.string({
    description: '셀 이름',
  }),
  locationType: z.string({
    description: '로케이션 구분',
  }),
  cellCode: z.string({
    description: '셀 코드',
  }),
  width: z
    .number({
      description: '가로',
    })
    .nullish(),
  height: z
    .number({
      description: '세로',
    })
    .nullish(),
  vertical: z
    .number({
      description: '높이',
    })
    .nullish(),
});

export const warehouseCell = z.object({
  locationCode: z.string({
    description: '로케이션 번호',
  }),
  locationType: z.string({
    description: '로케이션 구분',
  }),
  name: z.string({
    description: '로케이션 이름',
  }),
  inventoryCount: z.number({
    description: '적치수량',
  }),
});

export const warehouseCellList = z
  .object({
    warehouseCellList: z.array(warehouseCell),
  })
  .merge(pagingInfo);

export type Warehouse = z.infer<typeof warehouse>;
export type WarehouseList = z.infer<typeof warehouse>;
export type WarehouseNameData = z.infer<typeof warehouseNameData>;
export type WarehouseListAll = z.infer<typeof warehouseListAll>;
export type WarehouseDetail = z.infer<typeof warehouseDetail>;
export type WarehouseLine = z.infer<typeof warehouseLine>;
export type WarehouseLineList = z.infer<typeof warehouseLineList>;
export type WarehouseRack = z.infer<typeof warehouseRack>;
export type WarehouseRackList = z.infer<typeof warehouseRackList>;
export type WarehouseCellDetail = z.infer<typeof warehouseCellDetail>;
export type WarehouseCell = z.infer<typeof warehouseCell>;
export type WarehouseCellList = z.infer<typeof warehouseCellList>;

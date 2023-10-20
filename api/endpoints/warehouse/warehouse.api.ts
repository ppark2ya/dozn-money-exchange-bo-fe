import {
  internalServerError,
  notFound,
  returnMsg,
  unprocessableEntity,
} from '@/api/common.types';
import { api } from '@/api/zodios-api-shorthand';
import { z } from 'zod';

import {
  createWarehouseBody,
  createWarehouseCellBody,
  createWarehouseLineBody,
  createWarehouseRackBody,
  updateCellBody,
  updateWarehouseBody,
} from './warehouse.request';
import {
  warehouseCellDetail,
  warehouseCellList,
  warehouseDetail,
  WarehouseKeyword,
  warehouseLineList,
  warehouseList,
  warehouseListAll,
  warehouseRackList,
} from './warehouse.response';

const WAREHOUSE_PREFIX = '/warehouse';

export const WAREHOUSE_PATH_MAP = {
  GET_WAREHOUSE_LIST: `${WAREHOUSE_PREFIX}/list`,
  GET_WAREHOUSE_LIST_ALL: `${WAREHOUSE_PREFIX}/list/all`,
  GET_WAREHOUSE_BY_ID: `${WAREHOUSE_PREFIX}/:warehouseId`,
  CREATE_WAREHOUSE: `${WAREHOUSE_PREFIX}`,
  UPDATE_WAREHOUSE: `${WAREHOUSE_PREFIX}/:warehouseId`,
  GET_LINE_LIST_BY_WAREHOUSE_ID: `${WAREHOUSE_PREFIX}/:warehouseId/line/list`,
  DELETE_LINE: `${WAREHOUSE_PREFIX}/line/:warehouseLineId`,
  CREATE_LINE: `${WAREHOUSE_PREFIX}/line`,
  GET_RACK_LIST_BY_WAREHOUSE_LINE_ID: `${WAREHOUSE_PREFIX}/line/:warehouseLineId/rack/list`,
  CREATE_RACK: `${WAREHOUSE_PREFIX}/rack`,
  DELETE_RACK: `${WAREHOUSE_PREFIX}/rack/:warehouseRackId`,
  GET_CELL_BY_LOCATION_CODE: `${WAREHOUSE_PREFIX}/cell/:locationCode`,
  DELETE_CELL: `${WAREHOUSE_PREFIX}/cell/:locationCode`,
  PATCH_CELL: `${WAREHOUSE_PREFIX}/cell/:locationCode`,
  GET_CELL_LIST_BY_WAREHOUSE_RACK_ID: `${WAREHOUSE_PREFIX}/rack/:warehouseRackId/cell/list`,
  POST_CELL: `${WAREHOUSE_PREFIX}/cell`,
} as const;

export const warehouseApis = api({
  'GET warehouseList': {
    path: WAREHOUSE_PATH_MAP.GET_WAREHOUSE_LIST,
    queries: {
      page: z.number(),
      viewCount: z.number(),
      keywordType: z.nativeEnum(WarehouseKeyword),
      keyword: z.string().optional(),
    },
    response: warehouseList,
    errors: {
      404: notFound,
      500: internalServerError,
    },
    description: {
      path: '창고 데이터 리스트를 반환하는 API',
      response: 'warehouseList',
    },
  },
  'GET warehouseListAll': {
    path: WAREHOUSE_PATH_MAP.GET_WAREHOUSE_LIST_ALL,
    response: warehouseListAll,
    errors: {
      404: notFound,
      500: internalServerError,
    },
    description: {
      path: '재고실사등록 페이지에서 사용할 창고명 리스트 반환 API',
      response: 'warehouseListAll',
    },
  },
  'GET warehouseById': {
    path: WAREHOUSE_PATH_MAP.GET_WAREHOUSE_BY_ID,
    params: {
      warehouseId: z.number(),
    },
    response: warehouseDetail,
    errors: {
      404: notFound,
      500: internalServerError,
    },
    description: {
      path: '창고 상세 데이터를 반환하는 API',
      response: 'WarehouseDetail',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'POST warehouse': {
    path: WAREHOUSE_PATH_MAP.CREATE_WAREHOUSE,
    body: createWarehouseBody,
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 데이터를 입력하는 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'PATCH warehouse': {
    path: WAREHOUSE_PATH_MAP.UPDATE_WAREHOUSE,
    params: {
      warehouseId: z.number(),
    },
    body: updateWarehouseBody,
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 데이터를 업데이트하는 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'GET lineListByWarehouseId': {
    path: WAREHOUSE_PATH_MAP.GET_LINE_LIST_BY_WAREHOUSE_ID,
    params: {
      warehouseId: z.number(),
    },
    response: warehouseLineList,
    errors: {
      404: notFound,
      500: internalServerError,
    },
    description: {
      path: '창고 라인 데이터 리스트를 반환하는 API',
      response: 'WarehouseLineList',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'DELETE warehouseLine': {
    path: WAREHOUSE_PATH_MAP.DELETE_LINE,
    params: {
      warehouseLineId: z.number(),
    },
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 라인 데이터 삭제 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'POST warehouseLine': {
    path: WAREHOUSE_PATH_MAP.CREATE_LINE,
    params: {
      warehouseLineId: z.number(),
    },
    body: createWarehouseLineBody,
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 라인 데이터 추가 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'GET rackListByWarehouseLineId': {
    path: WAREHOUSE_PATH_MAP.GET_RACK_LIST_BY_WAREHOUSE_LINE_ID,
    params: {
      warehouseLineId: z.number(),
    },
    response: warehouseRackList,
    errors: {
      404: notFound,
      500: internalServerError,
    },
    description: {
      path: '창고 랙 데이터 리스트를 반환하는 API',
      response: 'WarehouseList',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'POST warehouseRack': {
    path: WAREHOUSE_PATH_MAP.CREATE_RACK,
    body: createWarehouseRackBody,
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 랙 데이터 입력 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'DELETE warehouseRack': {
    path: WAREHOUSE_PATH_MAP.DELETE_RACK,
    params: {
      warehouseRackId: z.number(),
    },
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 랙 데이터 삭제 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'GET cellByLocationCode': {
    path: WAREHOUSE_PATH_MAP.GET_CELL_BY_LOCATION_CODE,
    params: {
      locationCode: z.string(),
    },
    response: warehouseCellDetail,
    errors: {
      404: notFound,
      500: internalServerError,
    },
    description: {
      path: '창고 랙 상세 데이터를 반환하는 API',
      response: 'WarehouseList',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'DELETE warehouseCell': {
    path: WAREHOUSE_PATH_MAP.DELETE_CELL,
    params: {
      locationCode: z.string(),
    },
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 셀 데이터 삭제 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'PATCH warehouseCell': {
    path: WAREHOUSE_PATH_MAP.PATCH_CELL,
    params: {
      locationCode: z.string(),
    },
    body: updateCellBody,
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 랙 데이터 입력 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'GET cellListByWarehouseRackId': {
    path: WAREHOUSE_PATH_MAP.GET_CELL_LIST_BY_WAREHOUSE_RACK_ID,
    params: {
      warehouseRackId: z.number(),
    },
    queries: {
      page: z.number(),
      viewCount: z.number(),
    },
    response: warehouseCellList,
    errors: {
      404: notFound,
      500: internalServerError,
    },
    description: {
      path: '창고 랙 상세 데이터를 반환하는 API',
      response: 'WarehouseList',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
  'POST warehouseCell': {
    path: WAREHOUSE_PATH_MAP.POST_CELL,
    body: createWarehouseCellBody,
    response: returnMsg,
    errors: {
      422: unprocessableEntity,
      500: internalServerError,
    },
    description: {
      path: '창고 랙 데이터 입력 API',
      response: 'return msg',
      errors: {
        '404':
          'This error is triggered when the transaction is not found in the database',
      },
    },
  },
});

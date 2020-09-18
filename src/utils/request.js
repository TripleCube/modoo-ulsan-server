import { parseStringPromise } from 'xml2js';

import { axios } from '@loaders';

import { toPoint } from './converter';

export async function getStops(category, param) {
  const { data } = await axios.tago.get(
    '/BusSttnInfoInqireService/getSttnNoList',
    {
      params: { ...param, cityCode: category.id },
    },
  );
  const { totalCount, items } = data.response.body;
  const stops = items.item.reduce(
    (acc, val) =>
      acc.concat({
        id: val.nodeid.replace(category.name, ''),
        category: category.name,
        name: val.nodenm,
        number: val.nodeno,
        location: toPoint(val.gpslati, val.gpslong),
      }),
    [],
  );

  return { totalCount, stops };
}

export async function getUlsanStops(category, param) {
  const { data } = await axios.ulsan.get('/BusStopInfo.xo', {
    params: param,
  });
  const { tableInfo: body } = await parseStringPromise(data);
  const { totalCnt, list } = body;
  const stops = list[0].row.reduce(
    (acc, val) =>
      acc.concat({
        id: val.STOPID[0],
        category: category.name,
        name: val.STOPNAME[0],
        location: toPoint(val.STOPY[0], val.STOPX[0]),
        remark: val.STOPREMARK[0] !== '-' ? val.STOPREMARK[0] : '-',
        isLimoStop: !!+val.STOPLIMOUSINE[0],
      }),
    [],
  );

  return { totalCount: totalCnt[0], stops };
}

export async function getStopCount(category) {
  const { totalCount } = await this.getStops(category, { numOfRows: 1 });
  return totalCount;
}

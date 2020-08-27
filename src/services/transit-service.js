import { axios } from '@loaders';

export default class TransitService {
  static async fetchBus(name, number) {
    const { data } = await axios.tago.get(
      '/BusRouteInfoInqireService/getRouteNoList',
      {
        params: { nodeNm: name, routeNo: number },
      },
    );

    return data;
  }
}

import { axios } from '@loaders';

export default class StopService {
  static async fetchBusStop(name, number) {
    const { data } = await axios.tago.get(
      '/BusSttnInfoInqireService/getSttnNoList',
      {
        params: { nodeNm: name, nodeNo: number },
      },
    );

    return data;
  }
}

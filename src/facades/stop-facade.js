import { StopService } from '@services';

export default class StopFacade {
  static async findStop(props) {
    const { name, number } = props;

    const result = await StopService.fetchBusStop(name, number);

    return { result };
  }
}

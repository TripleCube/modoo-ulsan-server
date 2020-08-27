import { TransitService } from '@services';

export default class BusFacade {
  static async findBus(props) {
    const { name, number } = props;

    const result = await TransitService.fetchBus(name, number);

    return { result };
  }
}

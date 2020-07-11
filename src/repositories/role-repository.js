import { Role } from '@models';

export default class RoleRepository {
  static create(role) {
    return Role.create(role);
  }
}

import { Board } from '@models';

export default class BoardRepository {
  static create(board) {
    return Board.create(board);
  }

  static findById(id) {
    return Board.findByPk(id, {
      include: { association: 'board' },
    });
  }
}

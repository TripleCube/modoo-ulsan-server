import { v4 as uuid } from 'uuid';

function generateRandomNumber(length) {
  const min = 10 ** (length - 1);

  return Math.trunc(min + Math.random() * min * 9);
}

function generateUuid() {
  const fields = uuid().split('-');

  return fields[2] + fields[1] + fields[0] + fields[3] + fields[4];
}

export { generateRandomNumber, generateUuid };

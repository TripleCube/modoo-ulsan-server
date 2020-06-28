import bcrypt from 'bcrypt';

function hash(password) {
  return bcrypt.hash(password, 10);
}

function compare(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export { hash, compare };

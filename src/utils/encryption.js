import bcrypt from 'bcrypt';

function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

function compare(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export { hashPassword, compare };

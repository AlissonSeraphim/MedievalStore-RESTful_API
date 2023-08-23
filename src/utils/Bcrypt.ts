import bcrypt from 'bcryptjs';
import bcryptConfig from '../configs/hash';

const generateHash = (password: string): string => bcrypt.hashSync(password, bcryptConfig.salt);

const compare = (
  password: string,
  hashedPassword: string,
): boolean => bcrypt.compareSync(password, hashedPassword);

export default {
  generateHash,
  compare,
};
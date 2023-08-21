const jwtConfig = {
  secret: process.env.JWT_SECRET || 'secret',
  expiresInMinutes: '15m',
};

export default jwtConfig;
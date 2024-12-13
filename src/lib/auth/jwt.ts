import * as jose from 'jose';
import { User } from '../db/schema';

const secret = new TextEncoder().encode('your-secret-key');
const alg = 'HS256';

export async function createToken(user: User): Promise<string> {
  const jwt = await new jose.SignJWT({ sub: user.id, role: user.role })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
  
  return jwt;
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}
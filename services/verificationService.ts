import { VALID_CODES } from '../constants';

export const verifyCertificateCode = async (code: string): Promise<boolean> => {
  // Simulate API delay for realistic UI feel
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const trimmedCode = code.trim();
  return VALID_CODES.has(trimmedCode);
};
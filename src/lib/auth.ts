
export function validateApiKey(apiKey: string | undefined): boolean {
  if (!apiKey) return false;
  return apiKey === process.env.JWT_SECRET;
}
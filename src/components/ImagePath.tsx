export const getImagePath = (path: string): string => {
  const baseUrl = import.meta.env.PROD ? '' : '';
  return `${baseUrl}${path}`;
}
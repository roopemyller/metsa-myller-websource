export const getImagePath = (path: string): string => {
  const baseUrl = import.meta.env.PROD ? '/metsa-myller-websource' : '';
  return `${baseUrl}${path}`;
}
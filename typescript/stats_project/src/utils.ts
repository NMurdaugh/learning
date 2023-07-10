export const stringToDate = (dateString: string): Date => {
  const dateParts = dateString
  .split('/')
  .map((value: string) => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
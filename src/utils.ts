export const formatDateForShow = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ru-RU");
};

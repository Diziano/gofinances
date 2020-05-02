const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(date);

export default formatDate;

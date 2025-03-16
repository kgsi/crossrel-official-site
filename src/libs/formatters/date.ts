const intlDateFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export const dateFormatter = (date: Date): string => intlDateFormatter.format(date)

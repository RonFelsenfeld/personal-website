export const formatDate = (date: Date, locale: string = 'en-US') => {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
  })
}

export const formatDate = (date: Date, locale: string = 'en-US') => {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
  })
}

export const formatQuote = (quote: string) => {
  return `“${quote}”`
}

export const generateRandomId = (length = 6) => {
  const CHARACTERS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let txt = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
    txt += CHARACTERS[randomIndex]
  }

  return txt
}

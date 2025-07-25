import classNames from 'classnames'

import { Text, TextType } from '@/components/UI'

import styles from './Quote.module.scss'

interface QuoteProps {
  quote: string
  author?: string
  className?: string
  isTransparent?: boolean
}

const Quote = ({ quote, author, className, isTransparent }: QuoteProps) => {
  return (
    <section
      className={classNames(styles.quote, className, {
        [styles.transparent]: isTransparent,
      })}
    >
      <blockquote>
        <Text className={styles.quoteText}>{quote}</Text>

        {author && (
          <footer>
            <cite>
              <Text
                type={TextType.Secondary}
                className={styles.quoteAuthor}
              >
                {author}
              </Text>
            </cite>
          </footer>
        )}
      </blockquote>
    </section>
  )
}

export default Quote

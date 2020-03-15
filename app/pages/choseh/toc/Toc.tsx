import Markdown from 'react-markdown'
import styles from './Toc.module.scss'
import useToc from './useToc'
import TocLink from './TocLink'

interface Props {
  content: string
}

const Toc: React.FC<Props> = ({ content }) => {
  const { parseToc } = useToc(content)
  const tocContent = parseToc()

  return (
    <div className={styles.toc}>
      <div className={styles.toc_label}>목차</div>
      <Markdown
        source={tocContent}
        renderers={{
          link: TocLink,
        }}
      />
    </div>
  )
}

export default Toc
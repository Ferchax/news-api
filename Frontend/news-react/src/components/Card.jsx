/* eslint-disable react/prop-types */
import styles from './Card.module.css';

const Card = ({ article }) => {
  return (
    <div className={styles.card}>
      <div><img src={article.urlToImage} /></div>
      <div className={styles.content}>
        <div className={styles.title}>{article.title}</div>
        <div>{article.description}</div>
        <div className={styles.footer}>
          <div>{article.publishedAt}</div>
          <div className={styles.more}>Ver Mas...</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
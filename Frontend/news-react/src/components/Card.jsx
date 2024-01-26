/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import moment from 'moment';

const Card = ({ article }) => {
  return (
    <div className={`${styles.card} rounded bg-neutral-900`}>
      <div><img src={article.urlToImage} /></div>
      <div className={styles.content}>
        <div className={styles.title}>{article.title}</div>
        <div>{article.description}</div>
        <div className={styles.footer}>
          <div className={styles.date}>{moment(article.publishedAt, 'YYYY-MM-DD').format('DD/MM/YYYY')}</div>
          <div className={styles.more}><a href={article.url} target="_blank" rel="noreferrer">Ver Mas...</a></div>
        </div>
      </div>
    </div>
  )
}

export default Card;
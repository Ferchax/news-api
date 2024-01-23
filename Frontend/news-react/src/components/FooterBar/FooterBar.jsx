/* eslint-disable react/prop-types */
import styles from './FooterBar.module.css'

const FooterBar = ({children}) => {
  return (
    <div className={styles.pagination}>
      {children}
    </div>
  )
}

export default FooterBar;
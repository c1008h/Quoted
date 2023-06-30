import { Navbar } from '../components/Navbar'
import styles from './page.module.css'

export default function Home({ children }) {
  return (
    <div className={styles.main}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>paragraph</p>
      <p className={styles.text}>paragraph</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  </>
  )
}

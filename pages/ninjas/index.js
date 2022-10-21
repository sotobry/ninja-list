export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas = await res.json();

  return {
    props: { ninjas }
  }
};

import styles from '../../styles/Ninjas.module.css';
import Head from 'next/head';
import Link from 'next/link';

const Ninjas = ({ ninjas }) => {

  return (<>
    <Head>
      <title>Ninja List | List</title>
    </Head>
    <div>
      <h1>Ninjas</h1>

      {ninjas.map(ninja => {
        const { id, name } = ninja;
        return (
          <Link key={id} href={`/ninjas/${id}`}>
            <a className={styles.single}>
              <h3>{name}</h3>
            </a>
          </Link>
        );
      })}

    </div>
  </>);
}

export default Ninjas;
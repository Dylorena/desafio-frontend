import Head from 'next/head';
import { Search } from '../src/components/input/InputSearch';
import Styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Prev Temp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Styles.main}>
        <header><h1>Previsão do tempo</h1></header>
        <Search />
      </main>

      <footer >

      </footer>
    </div>
  )
}

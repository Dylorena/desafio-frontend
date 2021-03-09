import Head from 'next/head';
import { Capitais } from '../src/components/capitais/Capitais';
import { Search } from '../src/components/input/InputSearch';
import { CitySelected } from '../src/components/showInfo/CitySelected';
import Styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Prev Temp</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={Styles.main}>
        <header><h1>Previsão do tempo</h1></header>
        <CitySelected />
        <Search />
      </main>
      <Capitais />
    </div>
  )
}

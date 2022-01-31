import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Features from '../component/Features';
import Card from '../component/Card';
import ProductList from '../component/ProductList';


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Burger Restaurant in Ulaanbaatar</title>
        <meta name="description" content="Best burger in ulaanbaatar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features/>
      <ProductList/>
      

    </div>
  )
}

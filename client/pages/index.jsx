import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import TransactionHistory from '../components/TransactionHistory';

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Uniswap-clone</title>
        <meta name="description" content="Uniswap clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main />
      
      <TransactionHistory />
    </div>
  )
};

export default Home;

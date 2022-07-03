import type { NextPage } from 'next';
import Head from 'next/head';
import LeftBar from '../components/LeftBar';
import Posts from '../components/Posts';
import ProfileBar from '../components/ProfileBar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yoona Go Fit</title>
        <meta name="description" content="Yoona Fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex'>
        <div className='w-24'>
          <LeftBar />
        </div>
        <div className='overflow-y'>
          <Posts />
        </div>
        <div className='w-60'>
          <ProfileBar />
        </div>
      </main>

    </div>
  );
}

export default Home;

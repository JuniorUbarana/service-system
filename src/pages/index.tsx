import Head from 'next/head';

function Home() {
  return (
    <main>
      <Head>
        <title>Service System | Home</title>
      </Head>
      <header>
        <h1>Olá, mundo</h1>
      </header>
      <div className='container'>
        <aside>Menu</aside>
        <section className='main'>
          Hello world
        </section>
      </div>
      <footer>
        <p>
          2021
        </p>
      </footer>
    </main>
  );
}

export default Home;

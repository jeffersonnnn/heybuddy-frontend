import Head from "next/head";
import HeaderMain from "../components/HeaderMain";
import LandingMain from "../components/LandingMain";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Hey Buddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page">
        <HeaderMain />
        <LandingMain />
      </main>
    </section>
  );
}

import Head from "next/head";
import LandingMain from "../components/LandingMain";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Hey Buddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingMain />
    </section>
  );
}

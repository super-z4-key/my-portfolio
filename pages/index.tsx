import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Head>
        <title>Home Page - superzzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full flex flex-col justify-center items-star p-10 gap-3">
        <h3 className="text-emerald-400 text-xl">Hi my name is</h3>
        <h1 className="text-slate-300 text-3xl font-semibold">SUPERZZZ</h1>
        <h2 className="text-slate-400 text-2xl">Lorem ipsum dolor sit amet</h2>
        <h4 className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          architecto eius at consequatur nobis autem vero officia pariatur qui
          ut
        </h4>
        <h4 className="text-slate-500 hover:text-slate-400 font-mono self-center absolute bottom-2 cursor-pointer">
          <Link href="/skills">&#8594; <span className="underline underline-offset-4">let's to my skills</span> &#8592;</Link>
        </h4>
      </main>
    </div>
  );
}

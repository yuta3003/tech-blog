import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { getAllPosts } from "../lib/api";
import Image from 'next/image';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div>
      <Head>
        <title>Hello world!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <h1 className="
          mb-2
          mt-0
          text-5xl
          font-medium
          leading-tight
          text-primary
          text-gray-800
          bg-gray-100
          flex
          justify-center"
        >
          記事一覧
        </h1>

        <div className="
          grid
          grid-cols-3
          gap-4
          text-black
          font-bold
          bg-gray-300
          container
          border
          border-green-800"
        >
          {allPosts.map((post) => (
            <a href={post.slug} className="
              h-auto
              max-w-sm
              rounded-lg
              shadow-lg
              shadow-black/20
              transition-shadow
              duration-300
              ease-in-out
              hover:shadow-black/50
              block
              max-w-sm
              p-6
              bg-white
              border
              rounded-lg
              shadow
              hover:bg-gray-100
              dark:bg-gray-800
              dark:border-gray-700
              dark:hover:bg-gray-700"
              key={post.slug}
            >
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </a>
          ))}
        </div>
      </main>
      <footer className="bg-gray-100">
        <p>Powered by Next.js.</p>
      </footer>
    </div>
  );
};

export default Home;

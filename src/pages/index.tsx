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
    <div
      className="
        bg-gray-200
      "
    >
      <Head>
        <title>Hello world!</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main
        className="
          w-full
          bg-indigo-200
        "
      >
        <h1
          className="
            mt-0
            px-10
            py-5
            text-4xl
            font-medium
            text-primary
            text-gray-400
            bg-gray-200
          "
        >
          404 motivation not found
        </h1>

        <div
          className="
            mt-10
            ml-10
            mr-10
            sm:mt-20
            sm:ml-10
            sm:mr-10
            md:mt-20
            md:ml-20
            md:mr-20
            lg:mt-20
            lg:ml-30
            lg:mr-30
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-1
            text-gray-500
            font-bold
          "
        >
          {allPosts.map((post) => (
            <a
              href={post.slug}
              className="
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
                pt-1
                bg-white
                border
                rounded-lg
                shadow
                hover:bg-gray-100
              "
              key={post.slug}
            >
              <Image
                className="
                  w-full
                "
                src="/images/thumbnail/typescript-logo.png"
                alt="thumbnail"
                width={512}
                height={512}
              />
              <div
                className="
                  px-6
                  py-4
                "
              >
                <div
                  className="
                    font-bold
                    text-xl
                    mb-2"
                >
                  {post.title}
                </div>
                  <p
                    className="
                      text-gray-400
                      text-base
                    "
                  >
                    {post.date}
                  </p>
                </div>
            </a>
          ))}
        </div>
      </main>

      <footer
        className="
          bg-white
          rounded-lg
          shadow
          m-4
        "
      >
        <div
          className="
            w-full
            mx-auto
            max-w-screen-xl
            p-4
            md:flex
            md:items-center
            md:justify-between
          "
        >
          <span
            className="
              ml-5
              text-sm
              text-gray-500
              sm:text-center
            "
          >
            404 motivation not found
          </span>
          <ul
            className="
              flex
              flex-wrap
              items-center
              mt-3
              text-sm
              font-medium
              text-gray-500
              sm:mt-0
            "
          >
            <li>
              <a href="#"
                className="
                  mr-4
                  hover:underline
                  md:mr-6
                "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  mr-4
                  hover:underline
                  md:mr-6
                "
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  mr-4
                  hover:underline
                  md:mr-6
                "
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  mr-4
                  hover:underline
                  md:mr-6
                "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
};

export default Home;

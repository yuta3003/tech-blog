import type { InferGetStaticPropsType, NextPage } from "next";
import { getAllPosts } from "../lib/api";
import Image from 'next/image';
import Link from "next/link";
import Layout from "../components/layout/layout"

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <div
        className="
          mt-10    ml-10    mr-10
          sm:mt-20 sm:ml-10 sm:mr-10
          md:mt-20 md:ml-20 md:mr-20
          lg:mt-20 lg:ml-30 lg:mr-30

          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4

          gap-1
          font-bold
        "
      >
        {allPosts.map((post) => (
          <Link
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
                  mb-2
                  text-gray-500
                "
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
              {post.tags.map(tag => (
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    py-1.5
                    px-3
                    rounded-full
                    text-xs
                    font-medium
                    bg-blue-100
                    text-blue-800
                  "
                  key={tag}
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      inline-block
                      bg-indigo-400
                      rounded-full
                    "
                  />
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

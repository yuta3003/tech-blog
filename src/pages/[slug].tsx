import React from 'react';
import { NextPage, InferGetStaticPropsType } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import { getAllPosts, getPostBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import Layout from '../components/layout/layout'

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'date', 'content']);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <main
        className='
          flex
          justify-center
        '
      >
        <article>
          <img
            className='
              mt-6
              rounded-lg
              shadow-xl
            '
            src='/images/thumbnail/apple-logo.jpg'
            alt='Apple Logo'
            width={512}
            height={512}
          />
          <h1 className='
            w-full
            mt-0
            px-0
            pt-10
            text-4xl
            font-medium
            text-primary
            text-gray-500
            bg-gray-100'
          >
            {post.title}
          </h1>
          <div className='
            grid'
          >
            <div>
              <p className='
                font-medium
                text-gray-400'
              >
                {post.date}
              </p>
              <div
                className='
                  [&>h1]:text-4xl
                  [&>h1]:font-medium
                  [&>h1]:text-gray-500
                  [&>h2]:text-3xl
                  [&>h2]:font-medium
                  [&>h2]:text-gray-500
                  [&>h3]:text-2xl
                  [&>h3]:font-medium
                  [&>h3]:text-gray-500
                  [&>p]:text-xl
                  [&>p]:font-medium
                  [&>p]:text-gray-500
                '
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default Post;

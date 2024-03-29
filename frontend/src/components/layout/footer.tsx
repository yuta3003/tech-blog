import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer
        className='
          bg-white
          rounded-lg
          shadow
          m-4
        '
      >
        <div
          className='
            w-full
            mx-auto
            max-w-screen-xl
            p-4
            md:flex
            md:items-center
            md:justify-between
          '
        >
          <Link
            href='/'
            className='
              ml-5
              text-sm
              text-gray-500
              sm:text-center
            '
          >
            404 motivation not found
          </Link>
          <ul
            className='
              flex
              flex-wrap
              items-center
              mt-3
              text-sm
              font-medium
              text-gray-500
              sm:mt-0
            '
          >
            <li>
              <a href='#'
                className='
                  mr-4
                  hover:underline
                  md:mr-6
                '
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='
                  mr-4
                  hover:underline
                  md:mr-6
                '
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href='#'
                className='
                  mr-4
                  hover:underline
                  md:mr-6
                '
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='
                  mr-4
                  hover:underline
                  md:mr-6
                '
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

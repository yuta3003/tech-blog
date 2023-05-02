import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div
        className="
          bg-gray-200
        "
      >
        <Link
          href="/"
          className="
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
        </Link>
      </div>
    </>
  );
};

export default Header;

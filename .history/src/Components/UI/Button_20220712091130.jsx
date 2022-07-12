import React from "react";
import Link from "next/link";

const Button = ({ href, btnCaption }) => {
  return (
    <div>
      <Link href={"/" + href}>
        <button className="mt-4 bg-green rounded-md text-xl md:text-2xl font-semibold px-4 py-1 md:py-2">
          {btnCaption}
        </button>
      </Link>
    </div>
  );
};

export default Button;

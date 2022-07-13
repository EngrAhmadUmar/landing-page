import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div>
      <Link href="/apply">
        <button className="mt-4 border-green border-[3px] rounded-md text-xl md:text-2xl font-semibold px-4 py-1 md:py-2">
          Apply for a Visa
        </button>
      </Link>
    </div>
  );
};

export default Button;

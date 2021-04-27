import React from "react";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <Link href="/">
      <a>
        <header className="pt-12 pb-20 text-red text-lg font-shippori">
          heybuddy
        </header>
      </a>
    </Link>
  );
};

export default HeaderMain;

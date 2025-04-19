import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Link href={"/"}>home</Link>
      <br/>
      <Link href={"/abc"}>abc</Link>
    </>
  );
};

export default page;

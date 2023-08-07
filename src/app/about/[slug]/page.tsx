"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import style1 from "@/app/styles/style1.module.css";
import style2 from "@/app/styles/style2.module.css";

const QueryPage = ({ params }: { params: { slug: number } }) => {
  const router = useRouter();
  const myParams = useParams();
  const { slug } = myParams;
  return (
    <div
      className={`${style2.main} mt-48 leading-10 flex flex-col items-center`}
    >
      <div className="text-2xl text-center">
        This is slug page named: {slug}.
        <br />
        {`${params.slug} slug. It's from props as Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.`}
      </div>
      <button
        onClick={() => {
          router.push("/");
        }}
        className={`${style1.main} hover:bg-blue-600 text-white rounded-md px-2`}
      >
        Home
      </button>
    </div>
  );
};

export default QueryPage;

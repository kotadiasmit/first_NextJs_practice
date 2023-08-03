"use client";
import { useParams } from "next/navigation";
import React from "react";

const QueryPage = ({ params }: { params: { slug: number } }) => {
  const router = useParams();
  const { slug } = router;
  console.log(typeof slug);
  console.log(typeof params.slug);
  return (
    <div className="mt-48 text-center text-2xl leading-10">
      This is slug page named: {slug}.
      <br />
      {`${params.slug} slug. It's from props as Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.`}
    </div>
  );
};

export default QueryPage;

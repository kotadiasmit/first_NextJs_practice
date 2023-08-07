"use client";

import { ThreeCircles } from "react-loader-spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center h-[calc(100vh-52px)]">
      <ThreeCircles
        height="80"
        width="80"
        color="blue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="red"
        innerCircleColor="yellow"
        middleCircleColor="green"
      />
    </div>
  );
}

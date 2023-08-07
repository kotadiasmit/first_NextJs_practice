"use client";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center h-[calc(100vh-52px)]">
      <TailSpin
        height="50"
        width="50"
        color="blue"
        ariaLabel="tail-spin-loading"
        radius="0"
        visible={true}
      />
    </div>
  );
}

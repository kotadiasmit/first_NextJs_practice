import React from "react";

const Name = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-52px)] font-sans text-2xl">
      Hello this is Smit Kotadia 😀🎉🎆🎇..
    </div>
  );
};

export default Name;

export function generateMetadata({}) {
  return {
    title: "Smit Name Page",
  };
}

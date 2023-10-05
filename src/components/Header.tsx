import React from "react";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="flex justify-center mx-auto max-w-screen-xl p-4 py-8">
      <h2 className="mb-4 text-4xl">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {title}
        </span>
      </h2>
    </div>
  );
};

export default Header;
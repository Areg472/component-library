import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areg's Component Library",
  description: "This is Areg's component library :D Enjoy!",
};

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to Aregs component library
      </h1>
      <p className="text-black">
        Click on the items on the left for individual components!
      </p>
    </>
  );
}

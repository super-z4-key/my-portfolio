import Link from "next/link";

const pageNotFound = () => {
  return (
    <div className="absolute h-full w-full top-0 z-50 flex bg-white flex-col justify-center items-center">
      <h1 className="text-4xl font-bold font-mono">PAGE NOT FOUND</h1>
      <div className="text-4xl font-mono">
        {"return to "}
        <span className="underline">
          <Link href="/#">home</Link>
        </span>{" "}
        page
      </div>
    </div>
  );
};

export default pageNotFound;

import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-grow w-full p-6">
      <Link href="/">
        <a className="flex-1 text-4xl text-soft-dark-caption-text dark:text-soft-white-header font-semibold">
          Pomd
        </a>
      </Link>
    </div>
  );
};

export default Header;

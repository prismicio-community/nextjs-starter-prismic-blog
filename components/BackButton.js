import Link from "next/link";

/**
 * Back button used on blog post pages.
 */
export const BackButton = () => {
  return (
    <div className="back">
      <Link href="/">
        <a>back to list</a>
      </Link>
    </div>
  );
};

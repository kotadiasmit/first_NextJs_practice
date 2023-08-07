import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = headers();
  const fetchedUrl = headersList.get("referer");
  //   console.log(JSON.stringify(headersList));
  const fetchedPath = headersList.headers["x-invoke-path"];

  return (
    <div className="mt-12 w-screen flex flex-col items-center">
      <h2>Page Not Found</h2>
      <p>
        Could not found path <mark>{fetchedPath.slice(1)}</mark> from
        <b> {fetchedUrl}</b>
      </p>
      <p>
        View <Link href="/">all posts</Link>
      </p>
    </div>
  );
}

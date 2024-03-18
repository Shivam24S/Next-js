import Header from "@/component/header";
import Link from "next/Link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>
        🔥 Let&apos;s get started! 🔥
        <br />
      </p>
      <p>
        <Link href="/about">about us</Link>
      </p>
    </main>
  );
}

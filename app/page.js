import Link from "next/Link";

export default function Home() {
  console.log("check");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
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

import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark"
          src="/3dAvatar.webp"
          alt="Next.js logo"
          width={200}
          height={120}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to study hub!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Studying have never been easier. just upload your study material and let
            AI do the rest for you
          </p>
        </div>
        <div className="space-x-2">
          <link></link>
          <button className="bg-blue-500 rounded-xl px-4 py-2">Sign In</button>
          <button className="text-blue-500 border border-blue-500 bg-white rounded-xl px-4 py-2">Sign Up</button>
        </div>
      </main>
    </div>
  );
}

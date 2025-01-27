'use client'

import dynamic from "next/dynamic";
const LexicalEditor = dynamic(() => import("../dir/components/LexicalEditor"), { ssr: false });

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LexicalEditor />
    </main>
  );
}
'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {

  return (
    <div className="bg-[#fbfaff]">
      <Header/>
      <Main/>
    </div>
  );
}

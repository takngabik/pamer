"use client"

import {Divider, Progress} from "@nextui-org/react";
import {useTheme} from "next-themes";
import {useEffect} from "react";

export function About() {
  const {setTheme} = useTheme()
  useEffect(() => {
    setTheme("light")
  }, []);
  return (
    <section className="flex flex-row w-full justify-center py-8 bg-[#1BBD9C] text-white">
      <div className="w-3/5">
        <h1 className="text-xl font-semibold uppercase text-center mb-4 tracking-wider">
          About Me
        </h1>
        <span className="w-full flex flex-row justify-center">
          <Divider className="mb-2 w-10/12"/>
        </span>
        <div className="flex justify-center items-center mb-2">
          <span className="w-4/5 text-center mb-2">
            Freelancer berpengalaman dengan keahlian dalam pengembangan website
            dan aplikasi mobile yang mewujudkan ide menjadi sebuah solusi
            berbasis teknologi digital
          </span>
        </div>
        <div className="w-full flex flex-row justify-center gap-16">
          <div className="w-4/12 flex flex-col justify-end gap-2 text-left">
            <h1 className="font-semibold uppercase">Website Development</h1>
            <span>
              <h1>Typescript</h1>
              <Progress size="sm" value={80} color="secondary"/>
            </span>
            <span>
              <h1>Next.js Framework</h1>
              <Progress size="sm" value={70} color="primary"/>
            </span>
            <span>
              <h1>Tailwind CSS</h1>
              <Progress size="sm" value={80} color="warning"/>
            </span>
            <span>
              <h1>Prisma ORM</h1>
              <Progress size="sm" value={60} color="danger"/>
            </span>
          </div>
          <div className="w-4/12 flex flex-col justify-start gap-2 text-left">
            <h1 className="font-semibold uppercase">Mobile Application</h1>
            <span>
              <h1>Kotlin</h1>
              <Progress size="sm" value={75} color="warning"/>
            </span>
            <span>
              <h1>Android Native</h1>
              <Progress size="sm" value={70} color="secondary"/>
            </span>
            <span>
              <h1>XML Design</h1>
              <Progress size="sm" value={60} color="danger"/>
            </span>
            <span>
              <h1>Room Database</h1>
              <Progress size="sm" value={65} color="primary"/>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client"

import {Listbox, ListboxItem} from "@nextui-org/react";

export function About() {
  return (
    <section className="flex flex-row w-full justify-center py-8">
      <div className="w-3/5">
        <h1 className="text-xl font-semibold uppercase text-center mb-4 tracking-wider">
          About Me
        </h1>
        <div className="flex justify-center items-center">
          <span className="w-2/3 text-center mb-2">
            Freelancer dengan keahlian dalam pengembangan website dan aplikasi
            mobile yang mewujudkan ide menjadi sebuah solusi berbasis digital.
          </span>
        </div>
        <span className="w-full flex flex-row justify-between gap-4">
          <div className="w-5/12 flex justify-center">
            <Listbox>
              <ListboxItem key={"1"}>1</ListboxItem>
            </Listbox>
          </div>
          <div className="w-5/12 flex justify-center">
            <p>2</p>
          </div>
        </span>
      </div>
    </section>
  );
}
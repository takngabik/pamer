import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

export function Banner() {
  return (
    <section className="flex flex-col h-screen bg-[#1BBD9C] text-white">
      <Navbar position="static" className="bg-[#2D3F50]">
        <NavbarBrand></NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Link href="/" className="uppercase hover:underline hover:font-bold">
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/" className="uppercase hover:underline hover:font-bold">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/" className="uppercase hover:underline hover:font-bold">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent></NavbarContent>
      </Navbar>
      <main className="m-auto h-1/5">
        <span className="flex flex-col items-center">
          <h1 className="text-3xl font-bold uppercase">Hendra Application</h1>
          <p className="text-xs font-normal -m-2">
            jasa layanan pengembangan website dan mobile application
          </p>
        </span>
      </main>
    </section>
  );
}
import Link from "next/link";
import {FiAtSign, FiGithub} from "react-icons/fi";

export function Footer() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row justify-center bg-[#2d3f50]">
        <div className="w-4/12 text-white p-4 text-center">
          <h1 className="text-lg font-semibold mb-1 uppercase">Location</h1>
          <p className="text-md font-light">
            Jl. Hayam Wuruk No. 78 Jember 68135
            <br/> East Java - Indonesia
          </p>
        </div>
        <div className="w-2/12 text-white p-4 text-center">
          <h1 className="text-lg font-semibold mb-1 uppercase">Worldwide</h1>
          <div className="flex flex-row w-full justify-center gap-2">
            <Link href="https://github.com/hendrapaiton">
              <FiGithub className="text-5xl font-extrabold"/>
            </Link>
            <Link href="mailto:hendrasaputra90@admin.smk.belajar.id">
              <FiAtSign className="text-5xl font-extrabold"/>
            </Link>
          </div>
        </div>
        <div className="w-4/12 text-white p-4 text-center">
          <h1 className="text-lg font-semibold mb-1 uppercase">About Me</h1>
          <p className="text-md font-light">
            Freelancer dengan keahlian pengembangan website dan mobile yang mewujudkan
            ide menjadi solusi digital.
          </p>
        </div>
      </div>
      <p className="flex w-full justify-center py-2 text-xs text-white font-ligt bg-[#1b252e]">
        <span>&copy; 2018-2024, Hendra Application. All right reserved.</span>
      </p>
    </section>
  );
}
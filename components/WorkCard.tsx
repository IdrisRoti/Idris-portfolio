import ImageCarousel from "./carousel";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

type TWorkCard = {
    name: string;
    type: string;
    date: string;
    features: string[];
    technologies: string[];
    images: string[];
    github: string;
    liveurl: string;
}

const WorkCard = ({name, type, date, features, technologies, images, github, liveurl}: TWorkCard) => {
  return (
    <article className="bg-white rounded-md">
        <ImageCarousel images={images} name={name} />
        <div className="p-6">
            <h2 className="font-semibold text-xl md:text-2xl uppercase">{name}</h2>
            <p className="mt-2 font-semibold">{type}</p>
            <span className="uppercase text-sm tracking-wider">{date}</span>
            <p className="mt-2 mb-4 opacity-60 text-sm">{features.join(", ")}</p>
            <div className="flex flex-wrap gap-3 items-center">
                {technologies.map((tech) => (
                    <span key={tech} className="border px-3 py-1 rounded-full text-xs">{tech}</span>
                ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
                <Link href={liveurl} className="border p-3 rounded-full grid place-items-center hover:bg-[#1e1e1e] hover:text-white transition"><BiLink /></Link>
                <Link href={github} className="border p-3 rounded-full grid place-items-center hover:bg-[#1e1e1e] hover:text-white transition"><BsGithub /></Link>
            </div>
        </div>
    </article>
  )
}

export default WorkCard
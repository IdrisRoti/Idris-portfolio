import Button from "./Button"
import { experience } from "../constants"
import Link from "next/link"

const Experience = () => {
  return (
    <div className="h-screen relative bg-white">
        <div className="h-full max-w-[75rem] mx-auto px-4 flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-6 ">

        
        <div className="w-full max-lg:text-center" >
            <h2 className="text-2xl md:text-3xl tracking-wider font-semibold uppercase">Experienced with a variety of projects.</h2>
            <p className="mt-3 w-full md:w-2/3 lg:w-full max-lg:mx-auto">Proven track record of working on a wide range of projects, from responsive websites to complex web applications, showcasing versatility and adaptability in frontend development.</p>
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                <Link href="#availabilty">
                    <Button>Contact Me</Button>
                </Link>
                <Link href="#portfolio">
                    <Button variant="outlined">See my work</Button>
                </Link>
            </div>
        </div>
        <div className="w-full -order-1 lg:order-1">
            <div className="flex items-center justify-center w-full">
                {
                    experience.slice(0, 2).map(({id, icon: Icon, label, amount}) => (
                        <div key={id} className="flex w-full">
                            <div className="w-full aspect-square grid place-items-center py-3 px-5">
                                <Icon className="size-12 md:size-16" />
                            </div>
                            <div className="w-full aspect-square flex flex-col items-center justify-center text-center bg-stone-100 rounded-md py-3 px-5">
                                <p className="font-semibold text-xl md:text-2xl">{amount}</p>
                                <p className="text-sm md:text-base">{label}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center w-full">
                {
                    experience.slice(2, 4).map(({id, icon: Icon, label, amount}) => (
                        <div key={id} className="flex w-full">
                            <div className="w-full aspect-square flex flex-col items-center justify-center text-center bg-stone-100 rounded-md py-3 px-5">
                                <p className="font-semibold text-xl md:text-2xl">{amount}</p>
                                <p className="text-sm md:text-base">{label}</p>
                            </div>
                            <div className="w-full aspect-square grid place-items-center py-3 px-5">
                                <Icon className="size-12 md:size-16" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Experience
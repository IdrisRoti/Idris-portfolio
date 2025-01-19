import { technologies } from "@/constants"

const Technologies = () => {

  return (
    <section className="h-screen bg-stone-100 sticky top-0 py-20 px-4 md:px-0">
        <h2 className="uppercase text-2xl md:text-3xl text-center tracking-wider font-semibold mb-5">Technoogies I&apos;ve used</h2>
       <div className="max-w-[50rem] mx-auto grid grid-cols-2 gap-3 flex-wrap">
        {
            technologies.map(({id, name, icon:Icon}) => (
                <div key={id} className="bg-white flex items-center gap-3 rounded-xl p-2 col-span-1">
                    <span className="bg-stone-100 rounded-lg grid place-items-center size-10"><Icon className="text-black size-5" /></span>
                    <span className="text-sm md:text-base">{name}</span>
                </div>
            ))
        }
       </div>
    </section>
  )
}

export default Technologies
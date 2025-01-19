import { contactLinks } from '@/constants';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='h-screen flex flex-col justify-center relative bg-white'>
        <h3 className='text-center font-semibold'>Need my services?</h3>
        <h2 className='text-4xl font-semibold text-center'>Let&apos;s get in touch</h2>
        <div className="w-full flex justify-center mt-8 gap-2">
            {
              contactLinks.map(({id, link, icon: Icon }) => (
                <Link key={id} href={link} className="border p-3 rounded-full grid place-items-center hover:bg-[#1e1e1e] hover:text-white transition"><Icon /></Link>
              ))
            } 
        </div>
    </div>
  )
}

export default Contact;
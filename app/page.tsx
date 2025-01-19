import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className={`${roboto.className}`}>
      <Portfolio />
    </div>
  );
}

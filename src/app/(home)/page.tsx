import { Stats } from "@/components/Stats/stats";
import { Photo } from "@/components/photo/photo";
import { Social } from "@/components/social/social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello {"I'm"} <br /> <span className="text-accent">Anderson Nascimento</span>
            </h1>

            <p
              className="max-w-[500px] mb-9 text-white/80"
            >
              A passionate software developer with a love for technology, specializing in front-end development using Next.js and React. Enthusiastic about front-end testing, always striving to deliver high-quality, robust user experiences.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <Link href="/api/download">Download CV</Link>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

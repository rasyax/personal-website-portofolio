import Image from "next/image"
import fachryPhoto from "@/public/fachry_rasya.jpg"
import RealTimeClock from "@/components/RealTimeClock"
import { MapPin } from "lucide-react"
import CareerCard from "@/components/CareerCard"
import LearningCard from "@/components/LearningCard"
import { Button } from "@/components/ui/button"
function Home() {
  return (
    <main className="max-w-5xl mx-auto w-full">
      <section className="mx-2 flex flex-col">
        <div className="flex flex-col border-b border-neutral-800 py-8 justify-center items-center">
          <p><span className="text-neutral-400">@</span>rasyax</p>
        </div>
        <div className="flex flex-col gap-5 border-b border-neutral-800 md:justify-between md:flex-row">
          <div className="max-w-lg md:pr-10 pt-10 md:border-r  border-b md:border-b-0 border-neutral-800">
            <Image className="aspect-square object-cover" src={fachryPhoto} alt="fachry" ></Image>
            <div className="py-8 flex justify-between">
              <span className="flex items-center gap-1">
                <span><MapPin color="#a1a1a1" size={14} /></span>
                <h4 className="text-sm text-neutral-400 font-medium tracking-wider"> TANGERANG, INDONESIA</h4>
              </span>
              <RealTimeClock />
            </div>
          </div>
          <div className="flex-1 py-10 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xs font-medium tracking-widest text-neutral-400">ABOUT / PROFILE</h1>
              <h2 className="md:text-4xl py-5 text-3xl font-bold">Fachry Rasya Aldamar</h2>
            </div>
            <div>
              <p className="text-neutral-400 text-lg tracking-wider leading-6 text-justify">Seorang Software Engineer yang sangat antusias dengan perkembangan teknologi terkini. Didorong oleh rasa ingin tahu yang tinggi dan pendekatan yang kreatif, saya selalu bersemangat mengeksplorasi dan mempelajari hal-hal baru untuk membangun solusi digital yang menarik.</p>
            </div>
          </div>  
          </div>          
        </div>
        <div className="border-b border-neutral-800 flex  items-center justify-between py-8">
          <div className="flex-1 flex justify-center"><a href="https://github.com/rasyax"target="_blank">@rasyax</a></div>
          <span className="text-2xl text-neutral-700">\</span>
          <div className="flex-1 flex justify-center"><a href="https://www.instagram.com/rasyabtw" target="_blank">@rasyabtw</a></div>
        </div>
        <div className="border-b border-neutral-800">
          <div className="flex-1 py-20 flex flex-col gap-5">
            <div>
              <h1 className="text-xs font-medium tracking-widest text-neutral-400">CAREER</h1>
              <h2 className="md:text-4xl text-3xl font-bold">Experience</h2>
            </div>
            <div>
              <CareerCard/>
            </div>
          </div>
        </div>

        <div className="border-b border-neutral-800">
          <div className="flex-1 py-8 flex flex-col gap-5">
            <div>
              <h1 className="text-xs font-medium tracking-widest text-neutral-400">LEARNING ARCHIVE</h1>
              <h2 className="md:text-4xl text-3xl font-bold">Education</h2>
            </div>
            <div>
              <LearningCard/>
            </div>
          </div>
        </div>
        <div className="border-b border-neutral-800">
          <div className="flex-1 py-8 flex flex-col gap-5">
            <div>
              <h1 className="text-xs font-medium tracking-widest text-neutral-400">PROJECT ARCHIVE</h1>
              <h2 className="md:text-4xl text-3xl font-bold">Projects</h2>
            </div>
            <div className="py-10 flex items-center justify-center">
              <h1 className="font-bold text-neutral-400 tracking-widest">ONGOING</h1>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Home
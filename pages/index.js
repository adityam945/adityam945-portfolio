import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div className="Home-Page -z-10">
      <Banner />
      <MyExpertise />
      <RecentProjects />
      <Footer />
    </div>
  );
}


const BannerLayout = ({ children }) => {
  return (
      <div
          className="relative backdrop-blur-sm w-full h-80 bg-fixed z-10"
          style={{
              background: 'url(images/bg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
          }}>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
              <div className="bg-Black/5 backdrop-blur-sm w-full h-full">
                  {children}
              </div>
          </div>
      </div>
  )
}
import Typewriter from 'typewriter-effect';
import MyExpertise from "@/components/main/Expertise";
import RecentProjects from "@/components/main/RecentProjects";
import Footer from "@/components/main/Footer";

const Banner = () => {
  const router = useRouter()

  return (
      <BannerLayout>
          <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
              <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                  <div className="flex items-center md:items-center md:justify-around">
                      <div className="">
                          <div className="">
                              <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold"><a className="text-Blue"> Welcome!</a> to my Portfolio</h1>
                          </div>
                          <div className="">
                              <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                  {/* <span>{"<"}<span className="text-Blue sm:text-base xl:text-lg font-bold">Engineer</span>
                                      {">"}  */}
                                      <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> 
                                      <span className=" text-Blue">I AM </span> 
                                      <span className="inline-block">
                                          <Typewriter
                                              options={{
                                                  strings:
                                                      ['excited to Engineer Problems using technology',
                                                         'enthusiast about Cloud and Data Problems', 'hooked on video games' ],
                                                  autoStart: true,
                                                  loop: true,
                                                  deleteSpeed: 30,
                                                  cursor: "_",
                                                  pauseFor: 1000,
                                                  delay: 50
                                                  
                                              }}
                                          />
                                      </span>
                                      </span> 
                                      {/* </span> {"</"}<span className="text-Blue sm:text-base xl:text-lg font-bold">Engineer</span>{">"} */}
                              </div>
                          </div>
                          <button className="button" onClick={() => router.push("/experience")}>Experience</button>
                          <button className="button m-5" onClick={() => router.push("/projects")}>Projects</button>

                          {/* <button className="button ml-2" onClick={() => router.push("/experience")}>Experience</button> */}

                      </div>
                      <div className="w-48 h-52 relative hidden md:block">
                          <img className='absolute top-8 w-full h-full'src="images/memoji.png" alt="emoji" />
                      </div>
                  </div>
              </div>

              {/* details in row */}
              <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
                  <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Blue font-bold'></span>
                        <span className='text-xs text-Snow'>👾Full Stack Engineer</span>
                    </div>

                  <div className="flex items-center gap-x-1">
                      <span className='text-base md:text-lg text-Blue font-bold'>🎓</span>
                      <span className='text-xs text-Snow'>Masters Computer Science</span>
                  </div>

                  <div className="flex items-center gap-x-1">
                      <span className='text-base md:text-lg text-Blue font-bold'>💻5+</span>
                      <span className='text-xs text-Snow'>Development Experience</span>
                  </div>

                  <div className="flex items-center gap-x-1">
                      <span className='text-base md:text-lg text-Blue font-bold'>👨‍💻2+</span>
                      <span className='text-xs text-Snow'>Professional Experience</span>
                  </div>

                 
              </div>
          </div>
      </BannerLayout>
  )
}

import Link from 'next/link';
import {Button} from "./ui/button";
import {Download,Send,ScrollText} from "lucide-react";
import {RiBriefcase4Fill,RiTeamFill,RiTodoFill,RiArrowDownSLine,RiWindowLine} from "react-icons/ri";
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';
const Hero = () => {
  return (
    <section className='py-24 xl:py-48 h-[110vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'> 
         <div className="container mx-auto">
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                    <h1 className='h1 mb-4'>Hello, My name is Yasaswini Gottipati</h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                        Breif description with insights into myself, my vocational journey, and what I engage in professionally
                    </p>
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                        <Link href='/contact'>
                        <Button className='gap-x-2'>
                            Contact me <Send size={18} />
                        </Button>
                        </Link>
                        <a href="/hero/YasaswiniGottipati'sResume.pdf" target='_blank'>
                        <Button variant='secondary' className='gap-x-2' onclick >
                            Resume <ScrollText size={18} />
                        </Button>
                        </a>
                    </div>
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                    iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
                </div>
                <div className='hidden xl:flex relative '>
                    <Badge containerStyle='absolute top-[24%] -left-[5rem] ' icon={<RiBriefcase4Fill />} endCountNum={3} badgeText='Years Of Practice'/>
                    <Badge containerStyle='absolute top-[80%] -left-[1rem] ' icon={<RiTodoFill />} endCountNum={6} badgeText='Finished Projects'/>
                    <Badge containerStyle='absolute top-[55%] -right-8 ' icon={<RiWindowLine />} endCountNum={2} badgeText='Coding Platforms'/>
                   <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
                    </div> 
                    <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                    imgSrc="/hero/girlCoderimg.png" />
                </div>
            </div>
            <div className='hidden md:flex absolute left-2/4 bottom-0 xl:bottom-0 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>
         </div>
    </section>
  )
}

export default Hero
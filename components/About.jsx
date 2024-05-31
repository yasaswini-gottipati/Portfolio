import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import {User2,MailIcon,HomeIcon,PhoneCall,GraduationCap,Calendar,Briefcase} from 'lucide-react';
import { get } from "mongoose";

const infoData=[
    {
        icon:<User2 size={20} />,
        text:'Yasaswini gottipati'
    },
    {
        icon:<PhoneCall size={20} />,
        text:'7013251153'
    },
    {
        icon:<MailIcon size={20} />,
        text:'yasaswini1502@gmail.com'
    },
    {
        icon:<Calendar size={20} />,
        text:'Born on 15th feb,2004'
    },
    {
        icon:<GraduationCap size={20} />,
        text:'UnderGraduation'
    },
]
const qualificationData=[
    {
        title:'Education',
        data:[
            {
                university:'Vignan\'s Institute Of Information Technology',
                qualification:'Bachelor of Computer Science',
                years:'2021-present'
            },
            {
                university:'NRI VIDYA JUNIOR COLLEGE',
                qualification:'Higher Secondary Education',
                years:'2019-2021'
            },
            {
                university:'SRI CHAITANYA HIGH SCHOOL',
                qualification:'High School Education',
                years: 'Till 2019'
            },
        ]
    },
]

const skillData=[
    {
        title:'Skills',
        data:[
            {
                name:' C++ , Python',
            },
            {
                name:'  React , Javascript',
            },
            {
                name:'  NodeJS , ExpressJS',
            },
            {
                name:'  MongoDB , SQL',
            },
            {
                name:'  Django , Linux',
            },
            {
                name:'   Git , Github',
            },
            {
                name:'   Redux , TypeScript',
            },
            {
                name:'   React Native , NextJs',
            },
            {
                name:'   Problem Solving, Machine Learning',
            },
        ]
    }
]

const About = () => {
    const getData=(arr,title)=>{
        return arr.find((item)=>item.title===title);
    }
  return (
    <section className="xl:h-[900px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2  className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About me
            </h2>
            <div className="flex flex-col xl:flex-row">
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/girlCoderimg.png'/>
                </div>
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                               Personal Info
                            </TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
                               Qualifications
                            </TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                               SKills
                            </TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                        <TabsContent value='personal'>
                               <div className="text-center xl:text-left">
                                <h3 className="h3 mb-4 pt-8">
                                Professional Overview and Credentials
                                </h3>
                                <p className="subtitle max-w-xl max-auto xl:mx-0"> 
                                I'm a Fullstack Developer with over 3 years of Practice, skilled in both front-end and back-end technologies.
                                Proficient in JavaScript, HTML, CSS, and frameworks like React and Node.js. 
                                Experienced in database management, API integration, and cloud deployment. 
                                Committed to delivering high-quality code and staying updated with the latest web development trends to drive project success.
                                </p>
                                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                    {infoData.map((item,index)=>{
                                        return(
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-primary">Language Skill</div>
                                    <div className="border-b border-border"></div>
                                    <div>English,Telugu</div>
                                </div>
                               </div>
                            </TabsContent>
                            <TabsContent value='qualifications'>
                               <div>
                                <h3 className="h3 mb-8 pt-8 text-center xl:text-left">
                                    My Awesome Journey
                                </h3>
                                <div className="grid md:grid-cols-2 gap-y-8">
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <GraduationCap size={28} />
                                            <h4 className="capitalize font-medium">
                                                {getData(qualificationData,'Education').title}
                                            </h4>
                                        </div>
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData,'Education').data.map((item,index)=>{
                                                const {university,qualification,years}=item;
                                                return(
                                                    <div className="flex gap-x-8 group " key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )  
                                            })}
                                        </div>
                                    </div>
                                </div>
                               </div>
                            </TabsContent>
                            <TabsContent value='skills'>
                               <div className="text-center xl:text-left">
                                <h3 className="h3 mb-8 pt-8">
                                    Tools I use Everyday
                                </h3>
                                <div className="mb-16">
                                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                    <div className="border-b border-border mb-4">

                                    </div>
                                    <div>
                                        {getData(skillData,'Skills').data.map(
                                            (item,index)=>{
                                                const {name}=item
                                                return (
                                                    <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium">{name}</div>
                                                    </div>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                               </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About

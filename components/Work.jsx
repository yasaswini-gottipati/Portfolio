'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import ProjectCards from "./ProjectCards";
import {Swiper,SwiperSlide} from "swiper/react";

const projectData=[{
    image:'/work/1a.png',
    category:'node js',
    name:'Personal Finance Manager',
    description:"I have developed a personal finance manager app, focusing on user-friendly design and cross-platform functionality.",
    link:'https://pfm.onrender.com/',
    github:'https://github.com/yasaswini-gottipati/pfm',
  },
  {
    image:'/work/2a.png',
    category:'Next js',
    name:'Personal Portfolio',
    description:"A portfolio displays work, skills, and achievements, serving as a visual representation for potential employers.",
    link:'/',
    github:'/',
  },
  {
    image:'/work/3a.png',
    category:'react js',
    name:'ChatFast',
    description:"A text-based chat app enables users to communicate instantly using text and emojis, excluding voice/video calls.",
    link:'https://chat-front-app.onrender.com',
    github:'https://github.com/yasaswini-gottipati/ChatFast',
  },
  {
    image:'/work/4a.png',
    category:'Turtle',
    name:'Facing Obstacles',
    description:"In this game, defeating enemies boosts your score, requiring strategic gameplay and skillful maneuvers for success.",
    link:'/',
    github:'https://github.com/yasaswini-gottipati/facing-obstacles',
  },
  {
    image:'/work/6a.png',
    category:'Django',
    name:'Music Anywhere',
    description:"The Spotify API enables group access to music on the web, facilitating shared listening experiences in virtual rooms.",
    link:'/',
    github:'https://github.com/yasaswini-gottipati/MusicAnywhere',
  },
  {
    image:'/work/7a.png',
    category:'Django',
    name:'Authentication',
    description:"Django and ReactJS combine to provide secure authentication solutions, ensuring user identity and access control.",
    link:'/',
    github:'https://github.com/yasaswini-gottipati/Authentication-DjangoReact',
  },
  {
    image:'/work/8a.png',
    category:'React Native',
    name:'Aora',
    description:"A React Native app enables video uploading and bookmarking, enhancing user experience and content accessibility.",
    link:'/',
    github:'https://github.com/yasaswini-gottipati/VideoUpload',
  },
  ]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">
                    Latest Projects
                </h2>
                <p className="subtitle mb-8">
                I have developed responsive web and mobile applications using React and React Native with Expo, emphasizing user-friendly design and cross-platform functionality.
                </p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>
            <div className="xl:max-w-[800px] xl:absolute right-0 top-0">
                <Swiper className="h-[480px] " slidesPerView={1} breakpoints={{640:{
                    slidesPerView:2,
                },}} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
                {projectData.slice(0,4).map((project,index)=>{
                    return (
                        <SwiperSlide key={index}><ProjectCards project={project} /></SwiperSlide>
                    )
                })}
                </Swiper></div>
        </div>
    </section>
  )
}

export default Work

'use client';
import React,{useState} from 'react';
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import ProjectCards from '@/components/ProjectCards';

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
const unqiueCategories=['all projects', ...new Set(projectData.map((item)=>item.category))];


const Projects = () => {
  const [categories,setCategories]=useState(unqiueCategories);
  const [category,setCategory]=useState('all projects');
  const filteredProjects=projectData.filter(project=>{
    return category==='all projects'?project:project.category===category;
  });
  
  return (

    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none '>
            {categories.map((category,index)=>{
              return (
              <TabsTrigger
               onClick={()=>setCategory(category)}
                value={category}
                 key={index}
                 className='capitalize w-[162px] md:w-auto '>{category}</TabsTrigger>);
            })} 
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project,index)=>{
              return(
                <TabsContent value={category} key={index}>
                  <ProjectCards project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects

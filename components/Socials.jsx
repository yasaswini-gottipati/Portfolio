'use client';
import  Link  from 'next/link';
import {RiLinkedinFill,RiGithubFill,RiInstagramFill} from 'react-icons/ri';

const icons=[
  {
    path:'https://www.linkedin.com/in/yasaswini-gottipati-663b36254/',
    name:<RiLinkedinFill />
  },
  {
    path:'https://github.com/yasaswini-gottipati',
    name:<RiGithubFill />
  },
  {
    path:'https://www.instagram.com/gottipati_yasaswini/',
    name:<RiInstagramFill />
  },
]

const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon,index)=>{
          return <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        })
      }
      
    </div>
  )
}

export default Socials

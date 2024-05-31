import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion";

const link=[
    {path:'/' , name:'home'},
    {path:'/projects' , name:'my projects'},
    {path:'/contact' , name:'contact'},
]
const Nav = ({containerStyles,linkStyles,underlineStyles}) => {
    const path=usePathname()
  return (
    <nav className={`${containerStyles}`}>
      {link.map((link,index)=>{
        return (<Link href={link.path} 
        key={index} 
        className={`captilize ${linkStyles}`}>
            {link.path===path && (
                <motion.span 
                initial={{y: '-100'}} 
                animate={{y:0}} 
                transition={{type:'tween'}} 
                layoutId='underline' 
                className={`${underlineStyles}`}
                />
            )}
            {link.name}
        </Link>
  );
      })}
    </nav>
  )
}

export default Nav

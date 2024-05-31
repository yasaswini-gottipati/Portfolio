import {GanttChartSquare,Blocks,Gem} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Description } from '@radix-ui/react-dialog';

const servicesData=[
    {
        icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
        title :"Competitive Coding",
        description:" Proficient in competitive coding with strong algorithmic problem-solving skills and expertise in languages like C++, and Python",
    },
    {
        icon:<Blocks size={72} strokeWidth={0.8}/>,
        title :"Web Development",
        description:"Skilled in web development, proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js, with a focus on creating user-friendly and responsive web applications.",
    },
    {
        icon:<Gem size={72} strokeWidth={0.8}/>,
        title :"App Development",
        description:"Proficient in mobile app development using React Native and Expo, ensuring cross-platform compatibility and seamless user experiences.",
    },
]
const Service = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
                My Services
            </h2>
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item,index)=>{
                    return(
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className="text-primary absolute -top-[60px]">
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>

    </section>
  )
}

export default Service

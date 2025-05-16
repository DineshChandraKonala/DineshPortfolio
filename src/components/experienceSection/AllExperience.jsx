import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variant"
export default function AllExperience(){
    const experience = [
        {
            job : "Research Intern",
            company : "Defence Research & Development Laboratory",
            date : "June 2023 - July 2023",
            responsibilities : [
                "Conducted predictive analytics on student performance using ML models",
                "Explored multiple regression techniques and evaluated accuracy",
                "Cleaned and analyzed datasets with Pandas and NumPy",
                "Coordinated with a cross-functional team to integrate feedback iteratively"
            ]
        }
    ]
    return(
        <div className="w-[100%] flex flex-row sm:flex-col items-center justify-between">
            {
                experience.map((experience,index)=>{
                    return <>
                        <SingleExperience key={index} experience={experience}/>
                        {index > 1 ? <motion.div variants={fadeIn('down' ,0.2)} initial = "hidden"
                         whileInView='show' viewport={{once:false , amount:0}}>
                        <FaArrowRight className="text-6xl text-orange lg:block sm:hidden"/>
                        </motion.div>
                         : ""}
                    </>
                    
                    
                })
            }
        </div>
    );
}
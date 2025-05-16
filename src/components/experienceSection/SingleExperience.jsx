import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variant"
export default function SingleExperience({experience}){
    return(
        <motion.div variants={fadeIn('right' ,0.2)} initial = "hidden"
            whileInView='show' viewport={{once:false , amount:0}}
        className="md:h-[350px] w-[240px] sm:h-auto sm:w-auto border-2 border-orange border-dashed border-rounded-2xl mt-12 p-10 text-center">
            <p className="font-bold text-cyan text-3xl">{experience.job}</p>
            <p className="font-bold text-orange text-2xl">{experience.company}</p>
            <p className="font-bold text-LightGrey text-xl">{experience.date}</p>
            <div className="flex flex-col items-center mt-4 text-white">
                <ul className="space-y-2">
                    {experience.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{resp}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
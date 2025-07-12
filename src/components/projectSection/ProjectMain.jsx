import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variant"
const project = [
    {
        name : "ChatApplication Using socket.io",
        year : "Mar2025",
        align : "right",
        image : "/images/chatApp.png",
        link : "https://github.com/DineshChandraKonala/Chat-app"
    },
    {
        name : "Airnbn",
        year : "Mar2025",
        align : "left",
        image : "/images/website-img-1.jpg",
        link : "https://github.com/DineshChandraKonala/AirbnbProject"
    },
    {
        name : "Airnbn",
        year : "Mar2025",
        align : "right",
        image : "/images/website-img-1.jpg",
        link : "https://github.com/DineshChandraKonala/AirbnbProject"
    },
    {
        name : "Weather App",
        year : "Apr2025",
        align : "left",
        image : "/images/WeatherComponentApp.png",
        link : "https://github.com/DineshChandraKonala/Weather-App"
    },
    {
        name : "Currency Converter",
        year : "Oct 2024",
        align : "right",
        image : "/images/CurencyConverter.png",
        link : "https://github.com/DineshChandraKonala/Currency-Converter"
    }
]
export default function ProjectMain(){
    return (
        <div id="projects" className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
                <motion.div variants={fadeIn('up' ,0.2)} initial = "hidden"
                whileInView='show' viewport={{once:false , amount:0}}
                ><ProjectText/></motion.div>
                <div>
                    {
                        project.map((item,index)=>{
                            return <SingleProject key={index} name={item.name} 
                            year={item.year} align={item.align} image={item.image} link={item.link}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

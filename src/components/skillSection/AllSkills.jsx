import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import SingleSkill from "./SingleSkill";
import { TbBrandRedux } from "react-icons/tb";
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variant"
export default function AllSkills(){
    const skills = [
        {skill : 'HTML', icon : FaHtml5 },
        {skill : 'CSS', icon : FaCss3Alt},
        {skill : 'JavaScript', icon : IoLogoJavascript},
        {skill : 'React js', icon : RiReactjsFill},
        {skill : 'Bootstrap', icon : FaBootstrap},
        {skill : 'TailwindCSS', icon : RiTailwindCssFill},
        {skill : 'NodeJS', icon : RiNodejsLine},
        {skill : 'ExpressJS', icon : SiExpress},
        {skill : 'MySQL', icon : TbBrandMysql},
        {skill : 'MongoDB', icon : SiMongodb},
        {skill : 'Redux', icon : TbBrandRedux},
        {skill : 'DSA', icon : TbBinaryTree},
    ]
    return (
        <div>
                <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
                {
                    skills.map((item,index)=>{
                        return (<motion.div variants={fadeIn('up', index * 0.1)}
                         initial = "hidden"
                        whileInView='show' viewport={{once:false , amount:0}}>
                        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
                        </motion.div>
                    )})
                }
            </div>
        </div>
    );
}


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
import { TbBrandRedux } from "react-icons/tb";
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variant"
export default function AllSkillSM(){
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
    return(
        <div className="grid grid-cols-6 sm:grid-cols-2 gap-12  my-12">
            {
                skills.map((item,index)=>{
                    return <motion.div variants={fadeIn('up' ,0.2)} initial = "hidden"
                    whileInView='show' viewport={{once:false , amount:0.7}}
                    key={index} className="flex flex-col items-center">
                        <item.icon className="text-7xl text-orange"/>
                        <p className="text-center mt-4 text-white">{item.skill}</p>
                    </motion.div>
                })
            }
        </div>
    );
}
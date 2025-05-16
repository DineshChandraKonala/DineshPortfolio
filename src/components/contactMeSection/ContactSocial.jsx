import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function ContactSocial(){
    return(
        <div className="flex gap-4">
            <SingleContactSocial link="https://github.com/DineshChandraKonala" Icon={FiGithub}/>
            <SingleContactSocial link="https://www.instagram.com/dineshchandra__/" Icon={FaInstagram}/>
            <SingleContactSocial link="https://www.linkedin.com/in/dineshchandrakonala/" Icon={FaLinkedin}/>
            <SingleContactSocial link={"https://leetcode.com/u/DineshchandraKonala/"} Icon={SiLeetcode}/>
        </div>
    );
}
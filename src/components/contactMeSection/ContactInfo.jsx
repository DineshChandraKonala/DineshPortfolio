import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from "./SingleInfo";
export default function ContactInfo(){
    return(
        <div className="flex flex-col gap-4 text-white">
            <SingleInfo text={"dineshchandrakonala@gmail.com"} Image={HiOutlineMail}/>
            <SingleInfo text= {9014811741} Image={MdOutlinePhone} />
            <SingleInfo text={"Hyderabad-Telengana"} Image={CiLocationOn}/>
        </div>
    );
}
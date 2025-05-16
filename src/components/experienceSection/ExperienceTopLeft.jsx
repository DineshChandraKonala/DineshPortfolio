import ExperienceInfo from "./ExperienceInfo";

export default function ExperienceTopLeft(){
    return(
        <div className="flex flex-col gap-6 w-[300px]">
            <p className="text-orange font-bold uppercase text-3xl font-special text-center">Since 2023</p>
            <div className="flex justify-center items-center gap-4">
                <ExperienceInfo number={2} text={"years"}/>
                <p className="font-bold text-6xl text-LightBrown">-</p>
                <ExperienceInfo number={10} text="Websites"/>
            </div>
            <p className="text-white text-center">With 2years of experience of building dynamic and user-friendly scalbale website applications</p>
        </div>
    );
}
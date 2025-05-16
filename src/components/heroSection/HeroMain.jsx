import HeroText from "./heroText";
import HeroPic from "./heroPic";
export default function HeroMain(){
    return (
        <div className="pt-40 pb-16">
            <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center">
                <HeroText/>
                <HeroPic/>
            </div>
        </div>
    );
}
import { LuArrowDownRight } from "react-icons/lu";
export default function NavbarBtn(){
    return (
        <button className="px-4 py-2 rounded-full text-xl text-white font-body border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 hover:border-orange transition-all duration-500 hover:shadow-cyanShadow">
            Hire me 
            <div className="sm:hidden md:block">
                <LuArrowDownRight/>
            </div>
        </button>
    );
}
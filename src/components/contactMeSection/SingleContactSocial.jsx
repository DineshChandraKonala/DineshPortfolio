import ContactSocial from "./ContactSocial";
export default function SingleContactSocial({Icon,link}){
    return(
        <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3  flex items-center justify-center">
            <a className="cursor-pointer" href={link}>
                <Icon/>
            </a>
        </div>
    );
}
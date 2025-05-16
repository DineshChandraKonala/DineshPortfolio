export default function FooterMain(){
    const links = [
        {link : "About Me" ,section : "about"},
        {link : "Skills" ,section : "skills"},
        {link : "Experience" ,section : "experience"},
        {link : "Projects" ,section : "projects"},
        {link : "Contact" ,section : "contact"},
    ]
    return(
        <div className="px-4 mb-10">
            <div className="w-full h-[1px] bg-LightGrey mt-24"></div>
            <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
                <p className="text-3xl text-LightGrey">Konala Dinesh Chandra</p>
                <ul className="flex flex-row gap-4 text-LightGrey text-xl">
                    {
                        links.map((item,index)=>{
                            return <li key={index}><a href="#" 
                             className="hover:text-white transition-all duration-500 cursor-pointer">{item.link}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
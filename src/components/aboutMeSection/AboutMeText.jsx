export default function AboutMeText(){
    return (
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
            <h2 className="text-6xl text-cyan mb-10">About Me</h2>
            <p className="text-white">Full Stack Developer skilled in MERN Stack 
                (MongoDB, Express, React, Node.js) 
                with experience in REST APIs,
                database optimization, and problem-solving (DSA). 
                Passionate about performance optimization and scalable web
                applications.</p>
               <a href="https://drive.google.com/file/d/1-bLhDfGOUZzJ7uQhyMC9d6VMrRiZIrVS/view?usp=sharing">
                    <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10
                     hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center
                      text-white hover:text-cyan">MyResume</button></a>
        </div>
    );
}

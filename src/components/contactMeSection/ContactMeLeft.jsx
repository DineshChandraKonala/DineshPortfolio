import ContactForm from "./ContactForm";
export default function ContactMeLeft(){
    return(
        <div> 
            <div className="flex flex-col gap-8 w-full">
                <h2 className="text-orange text-6xl mb-4">Get in touch</h2>
                <p className="text-white">Feel free to reach out if you like to collaborate <br />
                You are few clicks away!
                </p>
                <ContactForm/>
            </div>
        </div>
    );
}
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
export default function ContactMeRight(){
    return(
        <div className="flex flex-col items-center justify-center gap-12">
            <img src="/images/email-image.png" alt="Contact me" className="max-w-[300px]"/>
            <ContactInfo/>
            <ContactSocial/>
        </div>
    );
}
export default function SingleInfo({text,Image}){
    return(
        <div className="flex gap-4 items-center justify-start">
            <Image className="text3xl"/>
            {text}
        </div>
    );
}
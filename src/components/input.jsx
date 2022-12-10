import { useEffect, useState } from "react";

function Input({ replacer, inpType, height }) {
    const [h, seth] = useState("20");
    useEffect(() => {

        if (height !== "undefined") {
            seth(() => { return height })
        }
    }, [])
    if (inpType === "textarea") {
        return (<textarea className="contact-inp text-basictext bg-slate-900 bg-opacity-50 h-40 w-full" placeholder={replacer} name="" id="" cols="20" rows="10" required></textarea>)
    }
    return (<>
        <input className={`contact-inp text-basictext bg-slate-900 bg-opacity-50 h-${h}`} type={inpType} placeholder={replacer} required />
    </>);
}

export default Input 
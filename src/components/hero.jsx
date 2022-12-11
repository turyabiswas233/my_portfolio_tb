import { useState } from "react";
import Input from './input'
import Transit from "./transition";

function Hero() {
    const [showCont, setShowCont] = useState(false);
    const [data, setdata] = useState({
        name: "",
        email: "",
        phone: null,
        message: "",
    })

    return (
        <div className="w-4/5 flex justify-around mx-auto relative">
            <section className="sec-left flex flex-col gap-9">

                <p>
                    <span className="text-3xl font-medium text-basicyellow">
                        Hello..
                    </span> <br />
                    <br />
                    <span className="text-6xl font-bold tracking-widest">
                        I  am  SUJOY
                    </span> <br />
                    <span className="text-4xl font-normal text-basicgreen">
                        Web Designer
                    </span>
                </p>
                <p className="text-md font-thin tracking-wider">
                    Be the best version of yourself
                </p>
                <button className="font-bold dark:text-basictext text-white bg-btnhover shadow-md dark:hover:shadow-white h-fit w-fit rounded-[10px] px-3 py-2 mx-20 transition-shadow"

                    onClick={() => {
                        setShowCont(true)
                    }}
                >Contact me</button>
            </section>
            {/* <Transit /> */}
            <section className="sec-right relative grid" >
                <img src="\images\herro profile pic.png" alt="" />

                {/* icons */}
                <div className="absolute h-[80%] w-full">

                    {/* js */}
                    <img className="absolute top-5 -left-8" src="\hero icons\js.png" alt="" />
                    {/* html */}

                    <img className="absolute -bottom-5 md:-bottom-10 -right-24 md:-right-32 contrast-150 scale-50" src="\3d image\html_logo2.gif" alt="" />

                    {/* css */}
                    <img className="absolute top-20 -right-10 scale-[.80]" src="\hero icons\css.png" alt="" />
                    {/* vscode */}
                    <img className="absolute bottom-3 -left-4" src="\hero icons\vscode.png" alt="" />
                </div>

                <div className="flex gap-3 mx-auto my-10">
                    <img src="/social icons/Facebook c.svg" alt="" />
                    <img src="/social icons/Instagram c.svg" alt="" />
                    <img src="/social icons/WhatsApp c.svg" alt="" />
                    <img src="/social icons/Twitter c.svg" alt="" />
                    <img src="/social icons/LinkedIn c.svg" alt="" />
                </div>
            </section>

            {showCont && (
                <div className={`w-screen h-screen ring-2 ring-white  rounded-md bg-zinc-900 bg-opacity-40 p-24 fixed  backdrop-blur-xl top-0 z-50 ${showCont && 'anim-pop'}`}>
                    <p className="relative text-lg w-full h-auto font-light tracking-tight dark:text-orange-500 text-orange-100">
                        Let&acute;s talk
                        <span className='float-right scale-75 mr-2' onClick={() => {
                            setShowCont(false)
                        }}>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.0038 13C28.0038 13 22.9478 20.528 20.4998 20.528C18.0518 20.528 13.0038 13 13.0038 13" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13 28.3848C13 28.3848 18.056 20.8568 20.504 20.8568C22.952 20.8568 28 28.3848 28 28.3848" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 20.5C2 34.374 6.626 39 20.5 39C34.374 39 39 34.374 39 20.5C39 6.626 34.374 2 20.5 2C6.626 2 2 6.626 2 20.5Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </p>
                    <h2 className="text-3xl font-bold text-orange-100">Have any project?</h2>
                    <form action="" className='mt-5 z-50 max-w-screen-md mx-auto'>
                        <div className='w-full grid grid-cols-2 gap-3 z-50'>

                            <Input replacer={"Name"} inpType={"text"} />
                            <Input replacer={"Email"} inpType={"email"} />
                        </div>
                        <div className='w-full grid grid-cols-2 gap-3 z-50'>
                            <Input replacer={"Phone Number"} inpType={"number"} />
                            <Input replacer={"Subject"} inpType={"text"} />
                        </div>
                        <div className='w-full grid grid-cols-1 '>
                            <Input replacer={"Your Message Here..."} inpType={"textarea"} height={'52'} />
                        </div>

                        <button className='bg-basicgreen hover:bg-hovergreen transition-colors py-2 px-3 text-2xl rounded-md mt-5 text-basictext font-semibold' type="submit">
                            Submit
                        </button>

                    </form>
                </div>)
            }
        </div>
    );
}

export default Hero;
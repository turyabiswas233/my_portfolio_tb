import { useState } from 'react';

function useMenuBar() {
    const [isHam, setIsHam] = useState();
    function handleHamburger() {
        setIsHam(!isHam)
    }

    return {
        isHam, Nav: (
            <div className={`nav_header w-full md:h-auto flex justify-between px-16 py-8 md:items-center sticky z-50 top-0 after:backdrop-blur-lg mx-auto mb-10 h-min  ${isHam ? 'after:h-[100vh]' : 'after:h-full'} after:transition-all after:duration-600 after:absolute after:w-full after:bg-red-500 after:top-0 after:left-0 after:bg-[#acf6] after:-z-20`}>
                <img className="w-16 p-0 scale-150 bg-none h-fit" src=" \iRonic.svg" alt="" />

                {/* navbar */}
                <div className="navbar flex relative">
                    {/* menubar hamburger */}
                    <button className="md:hidden w-10 h-10 
                 absolute right-0 -top-5 scale-50 " onClick={handleHamburger}>

                        {isHam ?
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_2_9)">
                                    <rect y="40" width="56.5685" height="14.1421" rx="7.07107" transform="rotate(-45 0 40)" />
                                    <rect x="10" width="56.5685" height="14.1421" rx="7.07107" transform="rotate(45 10 0)" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_2_9" x="2.92893" y="2.92893" width="44.1421" height="48.1421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="20" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 1 0 0 0 0.36 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_9" />
                                    </filter>
                                </defs>
                            </svg> :
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_2_8)">
                                    <rect x="0.709213" width="47" height="10" rx="7.04868" />
                                    <rect x="0.709213" y="17.9513" width="47" height="10" rx="7.04868" />
                                    <rect y="35.9026" width="47" height="10" rx="7.04868" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_2_8" x="0" y="0" width="50" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="20" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 1 0 0 0 0.36 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_8" />
                                    </filter>
                                </defs>
                            </svg>
                        }

                    </button>
                    {/* navbar list */}
                    <ul className="nav-list md:flex gap-12 hidden ">
                        <li><a className="hover:text-hovergreen transition-colors" href="#home">Home</a></li>
                        <li><a className="hover:text-hovergreen transition-colors" href="#">About</a></li>
                        <li><a className="hover:text-hovergreen transition-colors" href="#">Work</a></li>
                        <li><a className="hover:text-hovergreen transition-colors" href="#">Skill</a></li>
                        <li className="bg-basicgreen -mt-2 p-2 dark:text-basictext text-white hover:bg-hovergreen transition-all hover:text-slate-100 rounded-[0.625rem] ">
                            <a className="flex gap-2 font-bold " href="#">Resume
                                <img className="scale-75 -mt-1" src="/images/Download.svg" alt="" />


                            </a>
                        </li>
                    </ul>
                </div>
                {/* navbar list */}
                <ul className={`nav-list grid grid-cols-1 gap-12 
            absolute w-4/5  mx-auto md:hidden ${isHam ? "top-32 opacity-100 nav_header_mb" : "top-[-70vh] -z-20 opacity-30  "} transition-all duration-600`}>
                    <li className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem]"><a href="#home">Home</a></li>
                    <li className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem]"><a href="#home">About</a></li>
                    <li className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem]"><a href="#home">Work</a></li>
                    <li className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem]"><a href="#home">Skill</a></li>

                    <li className="bg-basicgreen -mt-2 p-2 dark:text-basictext text-white hover:bg-hovergreen transition-colors hover:text-slate-100 rounded-[0.625rem] ">
                        <a className="flex gap-2 font-bold justify-center " href="#">Resume
                            <img className="scale-75 -mt-1" src=" /images\Download.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}


export { useMenuBar };

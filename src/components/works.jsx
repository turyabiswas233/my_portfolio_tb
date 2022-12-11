function Work() {
    const data = [{
        id: 1,
        num: '107',
        txt: 'Total Clients'
    }, {
        id: 2,
        num: '+100',
        txt: 'Satisfied Clients'
    },
    {
        id: 3,
        num: '350',
        txt: 'Total Works'
    },
    {
        id: 4,
        num: '+323',
        txt: 'Successful Wrok'
    }]

    const Card = ({ number, text }) => {
        return <div className="ring-1 ring-basictext bg-opacity-50 bg-[rgba(200,200,200,0.1)] rounded-md grid grid-cols-3 gap-2 p-2 items-center">
            <p className="font-semibold bg-basicblue rounded-md h-full items-center flex place-content-center text-cyan-100 ">
                {number}
            </p>
            <p className="font-semibold col-span-2">{text}</p>
        </div>
    }
    return (
        <div className="w-5/6 mx-auto my-16">
            <h3 className="relative text-4xl w-fit h-full py-4 font-bold after:absolute after:w-1/2 after:h-1.5 after:content-[''] after:bg-basicblue after:rounded-full after:-bottom-[0.8px] after:left-0 
            before:absolute before:w-full before:h-[2.5px] before:content-[''] before:bg-gray-400 before:rounded-full before:bottom-0 before:left-0
            ">
                <span className="text-xl pr-3">
                    My
                </span>
                Work
            </h3>

            <div className="ring-2 dark:ring-white ring-cyan-500 rounded-md bg-[rgba(100,200,200,0.2)] my-10 p-5" >
                <p className="font-bold text-2xl">Top Works</p>
                <section className="flex items-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9998 5.50061C10.1258 5.50061 5.4998 10.1266 5.4998 24.0006C5.4998 37.8746 10.1258 42.5006 23.9998 42.5006C37.8738 42.5006 42.4998 37.8746 42.4998 24.0006C42.4998 10.1266 37.8738 5.50061 23.9998 5.50061Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.8836 17.0573C26.8836 17.0573 19.9116 21.8413 19.9116 24.0013C19.9116 26.1613 26.8836 30.9413 26.8836 30.9413" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className="w-1/3 h-auto scale-75 rounded-3xl flex flex-col bg-[rgba(200,200,200,0.2)] overflow-hidden">
                        <img className="w-full" src="/images/work Portfolio\work 1.png" alt="" />
                        <div className="w-3/4 mx-auto grid grid-cols-2 items-center py-5 ">
                            <p className="text-xl">iRonic</p>
                            <p className="text-xs">a set of related web pages located under a s
                                ingle domain name, typically produced by
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 rounded-3xl flex flex-col bg-[rgba(200,200,200,0.2)] overflow-hidden">
                        <img src="/images/work Portfolio\work 1.png" alt="" />
                        <div className="w-3/4 mx-auto grid grid-cols-2 items-center py-5 ">
                            <p className="text-xl">iRonic</p>
                            <p className="text-xs">a set of related web pages located under a s
                                ingle domain name, typically produced by
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 scale-75 rounded-3xl flex flex-col bg-[rgba(200,200,200,0.2)] overflow-hidden">
                        <img src="/images/work Portfolio\work 1.png" alt="" />
                        <div className="w-3/4 mx-auto grid grid-cols-2 items-center py-5 ">
                            <p className="text-xl">iRonic</p>
                            <p className="text-xs">a set of related web pages located under a s
                                ingle domain name, typically produced by
                            </p>
                        </div>
                    </div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 42.4994C37.8742 42.4994 42.5002 37.8734 42.5002 23.9994C42.5002 10.1254 37.8742 5.49939 24.0002 5.49939C10.1262 5.49939 5.50018 10.1254 5.50018 23.9994C5.50018 37.8734 10.1262 42.4994 24.0002 42.4994Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1164 30.9427C21.1164 30.9427 28.0884 26.1587 28.0884 23.9987C28.0884 21.8387 21.1164 17.0587 21.1164 17.0587" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                </section>

            </div>

            <section className="grid grid-cols-4 gap-3 w-full h-16 ">
                {data.map(elm => {
                    return <Card key={elm.id} number={elm.num} text={elm.txt} />
                })}
            </section>
        </div>
    );
}

export default Work;
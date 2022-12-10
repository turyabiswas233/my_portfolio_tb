import { useState, useTransition } from "react";

const Transit = () => {

    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    function handleClick() {
        startTransition(() => {
            setCount(c => c + 1);
        })
    }
    const Spinner = () => {
        return (<>
            <div className="w-10 h-10 rounded-full bg-white"></div>
        </>)
    }

    return (
        <div>
            {isPending && <Spinner />}
            <button className="p-4 text-center z-50 fixed top-20 left-32 bg-red-500" onClick={() => handleClick('turya', 20, 'web dev')}>{count}</button>
        </div>
    );


}
export default Transit


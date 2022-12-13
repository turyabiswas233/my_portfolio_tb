import { useReducer } from "react";
import img1 from "/images/work Portfolio/work 1.png";
import img2 from "/images/work Portfolio/work 1.png";
import img3 from "/images/work Portfolio/work 1.png";
import img4 from "/images/work Portfolio/work 1.png";

const IMG_SLIDER_EVENT = {
  previous: "pre",
  forward: "forw",
};
// jsons
const data = [
  {
    id: 1,
    num: "107",
    txt: "Total Clients",
  },
  {
    id: 2,
    num: "+100",
    txt: "Satisfied Clients",
  },
  {
    id: 3,
    num: "350",
    txt: "Total Works",
  },
  {
    id: 4,
    num: "+323",
    txt: "Successful Wrok",
  },
];
const images = [
  {
    id: 0,
    src: img1,
    projectName: "iRonic",
    info: "a set of related web pages located under a s ingle domain name,typically produced by",
  },
  {
    id: 1,
    src: img2,
    projectName: "iRonic",
    info: "lorem ipsum",
  },
  {
    id: 2,
    src: img3,
    projectName: "iRonic",
    info: "this is a fantastic project",
  },
  {
    id: 3,
    src: img4,
    projectName: "iRonic",
    info: "it is as funny as you can't imagine",
  },
];

function Work() {
  const initPos = 0;
  const [state, dispatch] = useReducer(reducer, initPos);

  const ImageCard = ({ imagesList }) => {
    return (
      <div className="block md:flex h-max top_work  ">
        {/* left */}
        <div className="w-full hidden md:w-1/3 rounded-3xl md:flex flex-col bg-[rgba(200,200,200,0.2)] overflow-hidden mt-3 md:mx-4">
          <img
            src={imagesList[state == 0 ? imagesList.length - 1 : state - 1].src}
            alt={`img${
              imagesList[state == 0 ? imagesList.length - 1 : state - 1].id
            }`}
          />
          <div className="w-full grid grid-cols-3 items-center p-3 h-full">
            <p className="text-xl">
              {imagesList[state == 0 ? imagesList.length - 1 : state - 1]
                .projectName + (state == 0 ? imagesList.length - 1 : state - 1)}
            </p>
            <p className="text-xs col-span-2">
              {imagesList[state == 0 ? imagesList.length - 1 : state - 1].info}
            </p>
          </div>
        </div>
        {/* center */}
        <div className="w-full md:w-1/3 rounded-3xl flex flex-col bg-[rgba(200,200,200,0.2)] overflow-hidden mt-3 md:mx-4">
          <img src={imagesList[state].src} alt={`img${imagesList[state].id}`} />
          <div className="w-full grid grid-cols-3 items-center p-3 h-full">
            <p className="text-xl">{imagesList[state].projectName + state}</p>
            <p className="text-xs col-span-2">{imagesList[state].info}</p>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-1/3 rounded-3xl hidden md:flex flex-col bg-[rgba(200,200,200,0.2)] overflow-hidden mt-3 md:mx-4">
          <img
            src={imagesList[state == imagesList.length - 1 ? 0 : state + 1].src}
            alt={`img${
              imagesList[state == imagesList.length - 1 ? 0 : state + 1].id
            }`}
          />
          <div className="w-full grid grid-cols-3 items-center p-3 h-full">
            <p className="text-xl">
              {imagesList[state == imagesList.length - 1 ? 0 : state + 1]
                .projectName + (state == imagesList.length - 1 ? 0 : state + 1)}
            </p>
            <p className="text-xs col-span-2">
              {imagesList[state == imagesList.length - 1 ? 0 : state + 1].info}
            </p>
          </div>
        </div>
      </div>
    );
  };
  function dataAosDelay(id) {
    let value = id * 120 + 410;
    return value;
  }
  function dataAosDuration(id) {
    let value = id * 120 + 110;
    return value;
  }

  const Card = ({ id, number, text }) => {
    return (
      <div
        className="ring-1 ring-basictext bg-opacity-50 bg-[rgba(200,200,200,0.1)] rounded-md grid grid-cols-3 gap-2 p-2 items-center"
        data-aos="zoom-in"
        data-aos-delay={dataAosDelay(id)}
        data-aos-duration={dataAosDuration(id)}
      >
        <p className="font-semibold bg-basicblue rounded-md h-full items-center flex place-content-center text-cyan-100 ">
          {number}
        </p>
        <p className="font-semibold col-span-2">{text}</p>
      </div>
    );
  };

  // reducer function
  function reducer(curState, action) {
    switch (action?.type) {
      case IMG_SLIDER_EVENT.forward:
        if (curState == images.length - 1) return 0;
        return curState + 1;

      case IMG_SLIDER_EVENT.previous:
        if (curState == 0) return images.length - 1;
        return curState - 1;
      default:
        return curState;
    }
  }

  return (
    <>
      <h1 id={"work"}></h1>

      <div className="w-5/6 mx-auto my-16 pb-10">
        <h3
          className="relative text-4xl w-fit h-full py-4 font-bold after:absolute after:w-1/2 after:h-1.5 after:content-[''] after:bg-basicblue after:rounded-full after:-bottom-[0.8px] after:left-0 
            before:absolute before:w-full before:h-[2.5px] before:content-[''] before:bg-gray-400 before:rounded-full before:bottom-0 before:left-0
            "
        >
          <span className="text-xl pr-3">My</span>
          Work
        </h3>

        <div className="ring-2 dark:ring-white ring-cyan-500 rounded-md bg-[rgba(100,200,200,0.2)] my-10 p-5">
          <p className="font-bold text-2xl">Top Works</p>
          <section className="md:flex md:flex-row items-center md:h-auto my-5 ">
            <div>
              <svg
                className="hidden md:block hover:-translate-y-1"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => dispatch({ type: IMG_SLIDER_EVENT.previous })}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.9998 5.50061C10.1258 5.50061 5.4998 10.1266 5.4998 24.0006C5.4998 37.8746 10.1258 42.5006 23.9998 42.5006C37.8738 42.5006 42.4998 37.8746 42.4998 24.0006C42.4998 10.1266 37.8738 5.50061 23.9998 5.50061Z"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.8836 17.0573C26.8836 17.0573 19.9116 21.8413 19.9116 24.0013C19.9116 26.1613 26.8836 30.9413 26.8836 30.9413"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* work list array */}

            <ImageCard imagesList={images} />

            {/* icon */}
            <div className="flex justify-center gap-5 md:mt-0 mt-6">
              <svg
                className="block md:hidden hover:-translate-y-1"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => dispatch({ type: IMG_SLIDER_EVENT.previous })}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.9998 5.50061C10.1258 5.50061 5.4998 10.1266 5.4998 24.0006C5.4998 37.8746 10.1258 42.5006 23.9998 42.5006C37.8738 42.5006 42.4998 37.8746 42.4998 24.0006C42.4998 10.1266 37.8738 5.50061 23.9998 5.50061Z"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.8836 17.0573C26.8836 17.0573 19.9116 21.8413 19.9116 24.0013C19.9116 26.1613 26.8836 30.9413 26.8836 30.9413"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="hover:-translate-y-1"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => dispatch({ type: IMG_SLIDER_EVENT.forward })}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0002 42.4994C37.8742 42.4994 42.5002 37.8734 42.5002 23.9994C42.5002 10.1254 37.8742 5.49939 24.0002 5.49939C10.1262 5.49939 5.50018 10.1254 5.50018 23.9994C5.50018 37.8734 10.1262 42.4994 24.0002 42.4994Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.1164 30.9427C21.1164 30.9427 28.0884 26.1587 28.0884 23.9987C28.0884 21.8387 21.1164 17.0587 21.1164 17.0587"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </section>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full h-16 ">
          {data.map((elm) => {
            return (
              <Card key={elm.id} id={elm.id} number={elm.num} text={elm.txt} />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Work;

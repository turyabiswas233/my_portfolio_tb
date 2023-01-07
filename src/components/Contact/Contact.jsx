import React, { useEffect, useState } from "react";

function Contact() {
  const [clientInfo, setclientinfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [msgLenght, setmsgLenght] = useState(0);

  useEffect(() => {
    setmsgLenght(clientInfo.message.length);

    return () => {
      msgLenght;
    };
  }, [clientInfo.message]);

  let disable =
    clientInfo.name == "" || clientInfo.email == "" || clientInfo.message == "";

  return (
    <div
      className="flex justify-center items-center flex-col text-slate-800 
    w-4/5 mx-auto
    "
    >
      <section className="text-center">
        <h1 className=" font-bold text-3xl">Reach out</h1>
        <p className="font-light">
          I am always looking for meaningful connections and <br /> projects to
          take on.
        </p>
      </section>
      <section className="w-full">
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 w-full"
        >
          {/* name */}
          <section className="relative text-sm">
            <label
              className={`absolute transition-all top-3 left-0 ${
                clientInfo.name !== ""
                  ? "text-pink-600 text-xs -translate-y-5 left-0 "
                  : ""
              }`}
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="border-b-2 border-slate-500 outline-none py-3 w-full "
              type="text"
              required
              name="name"
              id="name"
              value={clientInfo.name}
              autoComplete={"off"}
              onChange={(e) => {
                setclientinfo((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
          </section>
          {/* email */}
          <section className="relative text-sm">
            <label
              className={`absolute transition-all top-3 left-0 ${
                clientInfo.email !== ""
                  ? "text-pink-600 text-xs -translate-y-5 left-0"
                  : ""
              }`}
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              className="border-b-2 border-slate-500 outline-none py-3 w-full "
              type="email"
              required
              name="email"
              id="email"
              autoComplete={"off"}
              value={clientInfo.email}
              onChange={(e) => {
                setclientinfo((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
          </section>
          {/* message */}
          <section className={`relative text-sm`}>
            <label
              className={`absolute transition-all top-0 left-0 ${
                clientInfo.message !== ""
                  ? "text-pink-600 text-xs -translate-y-5 left-0"
                  : ""
              }`}
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              className="border-b-2 border-slate-500 outline-none resize-none w-full h-32"
              type="text"
              required
              name="message"
              id="message"
              value={clientInfo.message}
              autoComplete={"off"}
              onChange={(e) => {
                setclientinfo((pre) => {
                  return { ...pre, message: e.target.value };
                });
              }}
            ></textarea>
            <span
              className={`w-max h-12 px-2 flex items-center justify-center rounded-md absolute bottom-4 right-4
              text-cyan-50 ${
                msgLenght == 0
                  ? "hidden"
                  : msgLenght <= 200
                  ? "bg-green-500"
                  : "bg-rose-600"
              } ${msgLenght > 180 && "hover:opacity-70"}
            `}
            >
              Charecter: {msgLenght < 10 ? `0${msgLenght}` : msgLenght}
            </span>
          </section>
          {/* submit btn */}
          <button
            className={`m-auto w-fit h-fit px-4 py-3 text-center bg-blue-500 text-cyan-900 font-bold rounded-md hover:shadow-cyan-900 shadow-lg transition-all tracking-tight text-sm ${
              disable && "cursor-not-allowed shadow-none"
            }`}
            type="submit"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;

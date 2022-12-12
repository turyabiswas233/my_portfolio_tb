import { useEffect, useState } from "react";

function MouseEffect() {
  const [position, setPos] = useState({
    left: undefined,
    top: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined" || null) {
      window?.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;
        setPos((pre) => {
          return {
            ...pre,
            left: x,
            top: y,
          };
        });
      });
      window?.removeEventListener("mousemove", () => {
        return null;
      });
    }
  }, []);
  return (
    <>
      <span className="ball" style={position}></span>
    </>
  );
}

export default MouseEffect;

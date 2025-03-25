import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedComponent() {
  //the reference to the paragraph where the typed text will appear
  const typedElement = useRef(null);
  //reference to the typed instance, to be able to clean up
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(typedElement.current, {
      strings: ["Frontend Developer"],
      typeSpeed: 80,
      backSpeed: 55,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);
  return <span ref={typedElement} />;
}

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const buttons = document.querySelectorAll("button");
    const listItems = document.querySelectorAll("li");
    // Move cursor on mouse move
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    // Enlarge/shrink on button hover
    const enlargeCursor = () => {
      gsap.to(cursor, { scale: 2, duration: 0.3, ease: "power3.out" });
    };
    const shrinkCursor = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
    };

    window.addEventListener("mousemove", moveCursor);
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", enlargeCursor);
      btn.addEventListener("mouseleave", shrinkCursor);
    });

    listItems.forEach((listItem) => {
      listItem.addEventListener("mouseenter", enlargeCursor);
      listItem.addEventListener("mouseleave", shrinkCursor);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", enlargeCursor);
        btn.removeEventListener("mouseleave", shrinkCursor);
      });

      listItems.forEach((listItem) => {
        listItem.addEventListener("mouseenter", enlargeCursor);
        listItem.addEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
}

import { useState, useRef, useLayoutEffect } from "react";

const ReadMore = ({ text }) =>{
  const [showingFullText, setShowingFullText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef();

  const toggle = () => { 
    setShowingFullText(showingFullText => !showingFullText);
  }

  useLayoutEffect(() => {
    const handleResize = ()=>{
      const container = textRef.current;
      if (container.scrollHeight > container.clientHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    handleResize(); 
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div ref={textRef} className={showingFullText ? "text show" : "text"} >
        {text}
      </div>
      {
        showButton && <button className='toggle-btn' onClick={toggle}>{showingFullText ? "Show less" : "Read more"}</button>
      }
    </>
  )
}

export default ReadMore;

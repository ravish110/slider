
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { imgdata } from './constant';

function App() {
  const [activeImg,setActivImg] = useState(0);
  
  const handleNext = useCallback(() => {
    setActivImg((activeImg + 1) % imgdata.length);
  },[activeImg]);
  const handlePrev = useCallback(() => {
    setActivImg(!activeImg ?  imgdata.length - 1 : activeImg -1);
  },[activeImg])

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
  
    return () => {
      clearInterval(timer);
    };
  }, [activeImg, handleNext]);
  

  return (
    <div className="App">
      <p onClick={handlePrev}>Previous</p>
      {imgdata.map((url,i) =>(
        <img key={url} src={url} alt='slider' className={activeImg === i ? "show" : "hide"}/>
      ))}
      <p onClick={handleNext}>Next</p>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

function App() {
  const audio = useRef();
  const bgAudio = useRef();
  const preloadWrap = useRef();
  const startButton = useRef();
  const overlay = useRef();
  const [windowLoading, setWindowLoading] = useState(true);

  const handleTwwet = () => {
    const key = (Math.random()*100000).toString(26);
    const tweet = `•˚I’m searching for the Gates of Atlantis. •˚%0A%0A•˚@LegendOfSirena has given the key ${key}•˚%0A%0A`;
    window.open(`https://twitter.com/intent/tweet?text=${tweet}&url=${"https://legendofsirena.xyz"}`, '_blank');
  }

  const handlePlay = () => {
    startButton.current.style.display = "none";
    audio.current.play();
    overlay.current.style.display = "none";
    setTimeout(()=> {
      handleEnd();
    }, 5000)
  }

  const handleEnd = () => {
    preloadWrap.current.style.display = "none";
    // bgAudio.current.play();
  }

  useEffect(()=> {
    window.onload = () => setTimeout(()=> setWindowLoading(false), 3000);
  },[])

  return (
    <div className='main'>
      <div className="preloader" ref={preloadWrap}>
        {
          windowLoading
          ?<button
          >Please wait
        </button>
        :<button
          ref={startButton}
          onClick={handlePlay}
          >Click To Start
        </button>
        }
        <audio 
          src='/sirena_2.wav' 
          ref={audio}
          onEnded={handleEnd}
          loop='true'
          preload='auto'
        />
        <audio 
          src='/sirena_buildup_loopable.wav.wav' 
          ref={bgAudio}
          loop='true'
          preload='auto'
        />
        <div className='overlay' ref={overlay}/>
        
      </div>
      <button onClick={handleTwwet}>
        Click to call for Sirena
      </button>
    </div>
  )
}

export default App
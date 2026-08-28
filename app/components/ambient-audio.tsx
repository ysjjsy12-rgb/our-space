"use client";
import { useEffect, useRef, useState } from "react";

export function AmbientAudio(){
  const audio=useRef<HTMLAudioElement>(null); const [playing,setPlaying]=useState(false); const [blocked,setBlocked]=useState(false);
  async function play(){try{if(!audio.current)return;audio.current.volume=.42;await audio.current.play();setPlaying(true);setBlocked(false)}catch{setBlocked(true);setPlaying(false)}}
  useEffect(()=>{play();const first=(event:PointerEvent)=>{if((event.target as Element)?.closest?.(".site-audio"))return;if(audio.current?.paused)play()};window.addEventListener("pointerdown",first,{once:true});return()=>window.removeEventListener("pointerdown",first)},[]);
  return <div className={`site-audio ${playing?"playing":""} ${blocked?"blocked":""}`}><audio ref={audio} src="/assets/skylark.mp3" autoPlay loop preload="auto"/><button onClick={()=>{if(audio.current?.paused)play();else{audio.current?.pause();setPlaying(false)}}} aria-label={playing?"음악 일시 정지":"음악 재생"}>{playing?"Ⅱ":"▶"}</button><span><b>skylark</b><small>{blocked?"눌러서 음악 시작":playing?"wave to earth · playing":"wave to earth · paused"}</small></span></div>
}

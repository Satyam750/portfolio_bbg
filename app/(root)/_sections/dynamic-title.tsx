"use client";
import { Typography } from "@/ui/atoms/Typography"; 
import { useEffect, useState } from "react";


const titles = [
    "React Developer",
    "UX/UI Designer",
    "Frontend Engineer",
    "Software Engineer",
    "Creative Ghost",
    "React Developer",
    "UX/UI Designer",
    "Frontend Engineer",
    "Software Engineer",
    "Creative Ghost",
    "scroll_to know_more",
  ];
  const cryptic = "⎍⎎⎒⌭ ⌿⎎⌿⍅⍆⎎⌿⌶";


const DynamicTitle = () => {
    const [title,setTitle] = useState("Frontend Developer")

    useEffect(()=>{
        const loop = () => {
            const randomIndex = Math.floor(Math.random()*titles.length);
            const delay = Math.floor(Math.random()*2000) + 3000;
            setTitle(titles[randomIndex])
            if(delay > 4100){
                setTitle(cryptic)
                setTimeout(()=>setTitle(titles[randomIndex]),100)
                setTimeout(() => setTitle(cryptic), 200);
                setTimeout(() => setTitle(titles[randomIndex]), 350);
            }
            setTimeout(loop,delay)
        }
        setTimeout(loop,1500)
    },[])
  return (
   <Typography
   variant="h1"
   className="!text-white -ml-2 max-w-[450px] lg:!text-[120px] showTitle"
   >
{title}
   </Typography>
  )
}

export default DynamicTitle



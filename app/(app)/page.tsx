"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TestComp } from "@/components/TestComp";
export default function Home() {
  let [count,setCount] = useState(0);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Hello World {count}</h1>

    
      <TestComp abc={setCount}/>
     
      <Button onClick={()=>{
        setCount((prev)=>prev+1);
        setCount((prev)=>prev+1);
        setCount((prev)=>prev+1);
        console.log(count);}}>Click Me</Button>
    </div>
  );
}

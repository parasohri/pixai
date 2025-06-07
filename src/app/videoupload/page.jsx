"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
function videoupload() {
    const [file,setfile]=useState(null)
    const[title,settitle]=useState(null);
const [description,setdescription]=useState(null);
const [isuploading,setuploading]=useState(null);
const router=useRouter();
const MAX_FILE_SIZE=70*1024*1024;
const handlesubmit=async(event)=>{
    event.preventdefault();
    if(!file){
        return;
    }
    if(file.size>MAX_FILE_SIZE){
        alert("filesize too large")
    return;
    }
    
}
  return (
    <div>
      
    </div>
  )
}

export default page

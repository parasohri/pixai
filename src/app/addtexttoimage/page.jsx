'use client'
import React, { useState,useEffect,useRef, use } from 'react'
 
import { CldImage } from "next-cloudinary";
import { generativeBackgroundReplace } from "@cloudinary/url-gen/actions/effect";
import { NextResponse } from "next/server";
function shadowremoval() {
    const [uploading,setisuploading]=useState(null)
    const [uploaded,setuploaded]= useState('');
const [text,settext]=useState('');
 const [fontSize, setFontSize] = useState(80);
  const [fontColor, setFontColor] = useState('#ffffff');
      const [uploadedImage, setUploadedImage] = useState(null);
      const imageRef = useRef(null);
 useEffect(() => {
    if (uploadedImage) {}
     [uploadedImage]})
    const handlesubmit=async(event)=>{
        const file = event.target.files?.[0];
if (!file) return;
    setisuploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
       const response =await fetch('/api/imageuploader',{
            method:'POST',
            body:formData
        })
if (!response.ok) throw new Error("Failed to upload image");
 const data = await response.json();
       
      
      setUploadedImage(data.result.public_id);
      alert("image uploaded")
    } catch (error) {
        console.error(error);
      alert("Failed to upload image");
    }
    finally{
        setisuploading(false);
    }
    }
    const handledownload=async()=>{
        if(!imageRef.current){
            return 
        }
        fetch(imageRef.current.src).then((response)=>
            response.blob()
        ).then((blob)=>{
            const url = window.URL.createObjectURL(blob);
            const link =document.createElement('a');


            link.href=url;
 link.download = `abc.png`;  
            document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        })
    }
  return (
     <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Add Text to Image 
      </h1>

      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Upload an Image</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose an image file</span>
            </label>
            <input
              type="file"
              onChange={handlesubmit}
              className="file-input file-input-bordered file-input-primary w-full"
            />
          </div>

          {uploading && (
            <div className="mt-4">
              <progress className="progress progress-primary w-full"></progress>
            </div>
          )}
          <input
            type="text"
            placeholder="Enter text to add"
            className="input input-bordered w-full mt-4"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
<input type='text'
placeholder='Enter font size'
className='input input-bordered w-full mt-4'
value={fontSize}
onChange={(e) => setFontSize(e.target.value)} /> 
                <input
   type="color"
                  className="input input-bordered w-full"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                />
          {uploadedImage && (
            <div className="mt-6">
              <h2 className="card-title mb-4">Select Social Media Format</h2>
              <div className="form-control">
                
              </div>

              <div className="mt-6 relative">
                <h3 className="text-lg font-semibold mb-2">Preview:</h3>
                <div className="flex justify-center">
                   
                  <CldImage
  width="1335"
  height="891"
                    src={uploadedImage}
         sizes="100vw"
  overlays={[{
    text: {
      color: fontColor || '#ffffff',
      fontFamily: 'Source Sans Pro',
      fontSize: fontSize || 80,
      fontWeight: 'black',
      text: text || 'Add your text here',
    },
    effects: [
      {
        shear: '40:0',
        opacity: 50
      }
    ]
  }]}
  alt=""
  ref={imageRef}
/>
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <button className="btn btn-primary" onClick={handledownload}>
                  Download  
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default shadowremoval

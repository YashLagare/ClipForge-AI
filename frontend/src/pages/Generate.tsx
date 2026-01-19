import { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";

const Generate = () => {

  const [name, setName] = useState('');
  const [product, setProduct] = useState('');

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form className="max-w-4xl mx-auto mb-40">
        
        <Title heading="Create In-context Image" description="Upload your model and product images to generate stunning short-form videos and social media posts"/>
        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* left-column here */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone label="product Image" file={} onClear={()=>{}} onChange={()=>{}}/>
          </div>
          
          {/* right-column here */}
          <div>
            <p>right-col</p>
          </div>

        </div>
      
      </form>
    </div>
  )
}

export default Generate
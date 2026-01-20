import { LoaderIcon, RectangleHorizontalIcon, RectangleVerticalIcon, Wand2Icon } from "lucide-react";
import { useState } from "react";
import { PrimaryButton } from "../components/Buttons";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";

const Generate = () => {

  const [name, setName] = useState('');
  const [productImage, setProductImage] = useState<File | null>(null);
  const [productDescription, setProductDescription] = useState('');
  const [productName, setProductName] = useState('');
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'model') => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'product') {
        setProductImage(e.target.files[0]);
      } else {
        setModelImage(e.target.files[0]);
      }
    }
  }

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40">

        <Title heading="Create In-Context AI Visuals" description="Upload your model and product images to generate stunning, on-brand content for short-form videos and social media posts." />
        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* left-column here */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone label="product Image" file={productImage} onClear={() => { setProductImage(null) }} onChange={(e) => handleFileChange(e, 'product')} />

            <UploadZone label="model Image" file={modelImage} onClear={() => { setModelImage(null) }} onChange={(e) => handleFileChange(e, 'model')} />
          </div>


          {/* right-column here */}
          <div className="w-full">
            <div className="mb-4 text-gray-300">
              <label htmlFor="name" className="block text-sm mb-4">Project Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/10 outline-none transition-all"
                placeholder="Enter project name"
                required
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="productName" className="block text-sm mb-4">Product Name</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/10 outline-none transition-all"
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="productDescription" className="block text-sm mb-4">Product Description <span className="text-xs text-violet-400">(optional)</span></label>
              <textarea id="productDescription" rows={4} value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Enter the description here..."
                className="w-full bg-white/3 rounded-lg border-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/10 outline-none resize-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label className="block text-sm mb-4">Aspect Ratio</label>
              <div className="flex gap-3">
                <RectangleVerticalIcon onClick={() => setAspectRatio('9:16')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer ${aspectRatio === '9:16' ? 'ring-violet-500/50 bg-white/10' : ''}`} />
                <RectangleHorizontalIcon onClick={() => setAspectRatio('16:9')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer ${aspectRatio === '16:9' ? 'ring-violet-500/50 bg-white/10' : ''}`} />
              </div>
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="userPrompt" className="block text-sm mb-4">User Prompt <span className="text-xs text-violet-400">(optional)</span></label>
              <textarea id="userPrompt" rows={4} value={userPrompt} onChange={(e) => setUserPrompt(e.target.value)} placeholder="Add optional instructions to guide the result — style, tone, length, or audience."
                className="w-full bg-white/3 rounded-lg border-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/10 outline-none resize-none transition-all"
              />
            </div>

          </div>

        </div>
        <div className="flex justify-center mt-10">
          <PrimaryButton disabled={isGenerating} className="px-10 py-3 rounded-md disabled:opacity-70 disabled:cursor-not-allowed">
            {
              isGenerating ? (
                <div className="flex items-center justify-center">
                  <LoaderIcon className="animate-spin size-5 text-white mr-2" />
                  <span className="text-sm">Generating...</span>
                </div>
              ) : (
                <>
                  <Wand2Icon className="size-5"/>Generate Image
                </>
              )
            }
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default Generate
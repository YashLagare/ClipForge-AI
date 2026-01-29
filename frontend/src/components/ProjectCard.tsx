// // import { EllipsisIcon, ImageIcon, LoaderIcon, ShareIcon, Trash2Icon, VideoIcon } from "lucide-react";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import type { project } from "../types/Community";
// // import { GhostButton, PrimaryButton } from "./Buttons";

// // const ProjectCard = ({ gen, setGenerations, forCommunity = false }: { gen: project, setGenerations: React.Dispatch<React.SetStateAction<project[]>>, forCommunity?: boolean }) => {

// //     const navigate = useNavigate();
// //     const [menuOpen, setMenuOpen] = useState(false);


// //     const handleDelete = async (id: string) => {
// //         const confirm = window.confirm("Are you sure you want to delete this project?");
// //         if (!confirm) {
// //             return;
// //         }
// //         console.log(id);
// //     }

// //     const handleTogglePublish = async (projectId: string) => {
// //         const confirm = window.confirm("Are you sure you want to toggle this project?");
// //         if (!confirm) {
// //             return;
// //         }
// //         console.log(projectId);
// //     }

// //     return (
// //         <div key={gen.id} className="mb-4 break-inline-avoid">
// //             <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group">

// //                 {/* Preview of the ad */}
// //                 <div className={` ${gen?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} relative overflow-hidden`}>
// //                     {gen.generatedImage && (
// //                         <img src={gen.generatedImage} alt={gen.productName} className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${gen.generatedVideo ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`} />
// //                     )}

// //                     {gen.generatedVideo && (
// //                         <video src={gen.generatedVideo} muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500" onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
// //                     )}

// //                     {(!gen?.generatedImage && !gen?.generatedVideo) && (
// //                         <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/20">
// //                             <LoaderIcon className="size-7 animate-spin" />
// //                         </div>
// //                     )}

// //                     {/* status badages */}
// //                     <div className="absolute left-3 top-3 flex gap-2 items-center">
// //                         {gen.isGenerating && (
// //                             <span className="text-xs px-2 py-1 bg-yellow-600/30 rounded-full">Generating...</span>
// //                         )}

// //                         {gen.isPublished && (
// //                             <span className="text-xs px-2 py-1 bg-green-600/30 rounded-full">Published</span>
// //                         )}
// //                     </div>

// //                     {/* action menu here... for my generations only */}

// //                     {!forCommunity && (
// //                         <div
// //                             onMouseDownCapture={() => { setMenuOpen(!menuOpen) }}
// //                             onMouseLeave={() => { setMenuOpen(false) }}
// //                             className="absolute right-3 top-3 sm:opacity-0 group-hover:opacity-100 transition flex items-center gap-2">
// //                             <div className="absolute top-3 right-3">
// //                                 <EllipsisIcon className="ml-auto bg-black/20 rounded-full p-1 size-7" />
// //                             </div>
// //                             <div className="flex flex-col items-end w-32 text-sm">
// //                                 <ul className={`text-xs ${menuOpen ? 'block' : 'hidden'} overflow-hidden right-0 peer-focus:block hover:block w-40 bg-black/50 backdrop-blur text-white border border-gray-500/50 rounded-lg shadow-md mt-2 py-1 z-10`}>
// //                                     {gen.generatedImage && <a href={gen.generatedImage} download className="flex gap-2 items-center px-4 py-2 hover:bg-black/10 cursor-pointer"><ImageIcon className="size-4" />Download Image</a>}
// //                                     {gen.generatedVideo && <a href={gen.generatedVideo} download className="flex gap-2 items-center px-4 py-2 hover:bg-black/10 cursor-pointer"><VideoIcon className="size-4" />Download Video</a>}
// //                                     {(gen.generatedImage || gen.generatedVideo) && <GhostButton onClick={() => {
// //                                         navigator.share({
// //                                             title: gen.productName,
// //                                             text: gen.productDescription,
// //                                             url: gen.generatedImage || gen.generatedVideo,
// //                                         })
// //                                     }} className="w-full flex gap-2 items-center px-4 py-2 hover:bg-black/10 cursor-pointer">
// //                                         <ShareIcon size={14} />Share
// //                                     </GhostButton>}

// //                                     <button
// //                                         onClick={() => handleDelete(gen.id)}
// //                                         className="w-full flex gap-2 items-center px-4 py-2 hover:bg-red-950/10 text-red-400 cursor-pointer"
// //                                     >
// //                                         <Trash2Icon className="size-4" />
// //                                     </button>
// //                                 </ul>
// //                             </div>
// //                         </div>
// //                     )}

// //                     {/* source images */}
// //                     <div className="absolute right-3 bottom-3">
// //                         <img src={gen.uploadedImages[0]} alt="product" className="w-16 h-16 object-cover rounded-full animate-float" />
// //                         <img src={gen.uploadedImages[1]} alt="model" className="w-16 h-16 object-cover rounded-full animate-float -ml-8" style={{ animationDelay: '3s' }} />
// //                     </div>

// //                 </div>

// //                 {/* details */}
// //                 <div className="p-4">
// //                     <div className="flex items-start justify-between gap-4">
// //                         <div className="flex-1">
// //                             <h3 className="font-medium text-lg mb-1">{gen.productName}</h3>
// //                             <p className="text-sm text-gray-400">Created: {new Date(gen.createdAt).toLocaleString()}</p>
// //                             {gen.updatedAt && (
// //                                 <p className="text-xs text-gray-500 mt-1">Updated: {new Date(gen.updatedAt).toLocaleString()}</p>
// //                             )}
// //                         </div>
// //                         <div className="text-right">
// //                             <div className="mt-2 flex flex-col items-end gap-1">
// //                                 <span className="text-xs px-2 py-1 bg-white/5 rounded-2xl">Aspect: {gen.aspectRatio}</span>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Product Description here... */}
// //                     {gen.productDescription && (
// //                         <div className="mt-3">
// //                             <p className="text-xs text-gray-400 mb-1">Description:</p>
// //                             <div className=" text-sm mb-1 text-gray-300 bg-white/3 p-2 rounded-md wrap-break-word">{gen.productDescription}</div>
// //                         </div>
// //                     )}

// //                     {/* User Prompt here... */}
// //                     {gen.userPrompt && (
// //                         <div className="mt-3">
// //                             <p className="text-xs text-gray-400 mb-1">User Prompt:</p>
// //                             <div className=" text-sm mb-1 text-gray-300 bg-white/3 p-2 rounded-md wrap-break-word">{gen.userPrompt}</div>
// //                         </div>
// //                     )}

// //                     {/* View details here... */}
// //                     {!forCommunity && (
// //                         <div className="mt-4 grid grid-cols-2 gap-3">
// //                             <GhostButton onClick={()=> {navigate(`/result/${gen.id}`); scrollTo(0,0)}}>
// //                                 View Details
// //                             </GhostButton>

// //                             {/* publish or unpublish here... */}
// //                             <PrimaryButton onClick={()=> handleTogglePublish(gen.id)} className="rounded-md">
// //                                 {gen.isPublished ? 'Unpublish' : 'Publish'}
// //                             </PrimaryButton>
// //                         </div>
// //                     )}
// //                 </div>

// //             </div>
// //         </div>
// //     )
// // }

// // export default ProjectCard


// import { EllipsisIcon, ImageIcon, LoaderIcon, ShareIcon, Trash2Icon, VideoIcon } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import type { project } from "../types/Community";
// import { GhostButton, PrimaryButton } from "./Buttons";

// const ProjectCard = ({ gen, setGenerations, forCommunity = false }: { gen: project, setGenerations: React.Dispatch<React.SetStateAction<project[]>>, forCommunity?: boolean }) => {

//     const navigate = useNavigate();
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleDelete = async (id: string) => {
//         const confirm = window.confirm("Are you sure you want to delete this project?");
//         if (!confirm) {
//             return;
//         }
//         // Remove from local state
//         setGenerations(prev => prev.filter(g => g.id !== id));
//         console.log("Deleted:", id);
//     }

//     const handleTogglePublish = async (projectId: string) => {
//         const confirm = window.confirm("Are you sure you want to toggle this project?");
//         if (!confirm) {
//             return;
//         }

//         // Update the local state
//         setGenerations(prev => prev.map(gen => 
//             gen.id === projectId 
//                 ? { ...gen, isPublished: !gen.isPublished } 
//                 : gen
//         ));

//         console.log("Toggled publish for:", projectId);
//     }

//     return (
//         <div key={gen.id} className="mb-4 break-inline-avoid">
//             <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group">

//                 {/* Preview of the ad */}
//                 <div className={` ${gen?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} relative overflow-hidden`}>
//                     {gen.generatedImage && (
//                         <img src={gen.generatedImage} alt={gen.productName} className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${gen.generatedVideo ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`} />
//                     )}

//                     {gen.generatedVideo && (
//                         <video src={gen.generatedVideo} muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500" onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
//                     )}

//                     {(!gen?.generatedImage && !gen?.generatedVideo) && (
//                         <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/20">
//                             <LoaderIcon className="size-7 animate-spin" />
//                         </div>
//                     )}

//                     {/* status badges */}
//                     <div className="absolute left-3 top-3 flex gap-2 items-center">
//                         {gen.isGenerating && (
//                             <span className="text-xs px-2 py-1 bg-yellow-600/30 rounded-full">Generating...</span>
//                         )}

//                         {gen.isPublished && (
//                             <span className="text-xs px-2 py-1 bg-green-600/30 rounded-full">Published</span>
//                         )}

//                         {!gen.isPublished && (
//                             <span className="text-xs px-2 py-1 bg-gray-600/30 rounded-full">Unpublished</span>
//                         )}
//                     </div>

//                     {/* action menu here... for my generations only */}
//                     {!forCommunity && (
//                         <div
//                             onMouseDownCapture={() => { setMenuOpen(!menuOpen) }}
//                             onMouseLeave={() => { setMenuOpen(false) }}
//                             className="absolute right-3 top-3 sm:opacity-0 group-hover:opacity-100 transition flex items-center gap-2">
//                             <div className="absolute top-3 right-3">
//                                 <EllipsisIcon className="ml-auto bg-black/20 rounded-full p-1 size-7" />
//                             </div>
//                             <div className="flex flex-col items-end w-32 text-sm">
//                                 <ul className={`text-xs ${menuOpen ? 'block' : 'hidden'} overflow-hidden right-0 peer-focus:block hover:block w-40 bg-black/50 backdrop-blur text-white border border-gray-500/50 rounded-lg shadow-md mt-2 py-1 z-10`}>
//                                     {gen.generatedImage && <a href={gen.generatedImage} download className="flex gap-2 items-center px-4 py-2 hover:bg-black/10 cursor-pointer"><ImageIcon className="size-4" />Download Image</a>}
//                                     {gen.generatedVideo && <a href={gen.generatedVideo} download className="flex gap-2 items-center px-4 py-2 hover:bg-black/10 cursor-pointer"><VideoIcon className="size-4" />Download Video</a>}
//                                     {(gen.generatedImage || gen.generatedVideo) && <GhostButton onClick={() => {
//                                         navigator.share({
//                                             title: gen.productName,
//                                             text: gen.productDescription,
//                                             url: gen.generatedImage || gen.generatedVideo,
//                                         })
//                                     }} className="w-full flex gap-2 items-center px-4 py-2 hover:bg-black/10 cursor-pointer">
//                                         <ShareIcon size={14} />Share
//                                     </GhostButton>}

//                                     <button
//                                         onClick={() => handleDelete(gen.id)}
//                                         className="w-full flex gap-2 items-center px-4 py-2 hover:bg-red-950/10 text-red-400 cursor-pointer"
//                                     >
//                                         <Trash2Icon className="size-4" />
//                                         Delete
//                                     </button>
//                                 </ul>
//                             </div>
//                         </div>
//                     )}

//                     {/* source images */}
//                     <div className="absolute right-3 bottom-3">
//                         <img src={gen.uploadedImages[0]} alt="product" className="w-16 h-16 object-cover rounded-full animate-float" />
//                         <img src={gen.uploadedImages[1]} alt="model" className="w-16 h-16 object-cover rounded-full animate-float -ml-8" style={{ animationDelay: '3s' }} />
//                     </div>

//                 </div>

//                 {/* details */}
//                 <div className="p-4">
//                     <div className="flex items-start justify-between gap-4">
//                         <div className="flex-1">
//                             <h3 className="font-medium text-lg mb-1">{gen.productName}</h3>
//                             <p className="text-sm text-gray-400">Created: {new Date(gen.createdAt).toLocaleString()}</p>
//                             {gen.updatedAt && (
//                                 <p className="text-xs text-gray-500 mt-1">Updated: {new Date(gen.updatedAt).toLocaleString()}</p>
//                             )}
//                         </div>
//                         <div className="text-right">
//                             <div className="mt-2 flex flex-col items-end gap-1">
//                                 <span className="text-xs px-2 py-1 bg-white/5 rounded-2xl">Aspect: {gen.aspectRatio}</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Product Description here... */}
//                     {gen.productDescription && (
//                         <div className="mt-3">
//                             <p className="text-xs text-gray-400 mb-1">Description:</p>
//                             <div className=" text-sm mb-1 text-gray-300 bg-white/3 p-2 rounded-md wrap-break-word">{gen.productDescription}</div>
//                         </div>
//                     )}

//                     {/* User Prompt here... */}
//                     {gen.userPrompt && (
//                         <div className="mt-3">
//                             <p className="text-xs text-gray-400 mb-1">User Prompt:</p>
//                             <div className=" text-sm mb-1 text-gray-300 bg-white/3 p-2 rounded-md wrap-break-word">{gen.userPrompt}</div>
//                         </div>
//                     )}

//                     {/* View details here... */}
//                     {!forCommunity && (
//                         <div className="mt-4 grid grid-cols-2 gap-3">
//                             <GhostButton onClick={()=> {navigate(`/result/${gen.id}`); scrollTo(0,0)}}>
//                                 View Details
//                             </GhostButton>

//                             {/* publish or unpublish here... */}
//                             <PrimaryButton 
//                                 onClick={()=> handleTogglePublish(gen.id)} 
//                                 className={`rounded-md ${gen.isPublished ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
//                             >
//                                 {gen.isPublished ? 'Unpublish' : 'Publish'}
//                             </PrimaryButton>
//                         </div>
//                     )}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ProjectCard

// import {
//     EllipsisIcon,
//     ImageIcon,
//     LoaderIcon,
//     ShareIcon,
//     Trash2Icon,
//     VideoIcon,
// } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// import type { project } from "../types/Community";
// import { GhostButton, PrimaryButton } from "./Buttons";

// const ProjectCard = ({
//     gen,
//     setGenerations,
//     forCommunity = false,
// }: {
//     gen: project;
//     setGenerations: React.Dispatch<React.SetStateAction<project[]>>;
//     forCommunity?: boolean;
// }) => {
//     const navigate = useNavigate();
//     const [menuOpen, setMenuOpen] = useState(false);

//     /* ---------------- DELETE ---------------- */
//     const handleDelete = async (id: string) => {
//         const confirm = window.confirm(
//             "Are you sure you want to delete this project?"
//         );
//         if (!confirm) return;

//         setGenerations(prev => prev.filter(g => g.id !== id));
//         console.log("Deleted:", id);
//     };

//     /* ---------------- PUBLISH / UNPUBLISH ---------------- */
//     const handleTogglePublish = async (projectId: string) => {
//         const result = await Swal.fire({
//             title: gen.isPublished ? "Unpublish Project?" : "Publish Project?",
//             text: gen.isPublished
//                 ? "This project will be removed from the community."
//                 : "This project will be visible to everyone in the community.",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: gen.isPublished ? "#ef4444" : "#4f46e5",
//             cancelButtonColor: "#6b7280",
//             confirmButtonText: gen.isPublished
//                 ? "Yes, Unpublish"
//                 : "Yes, Publish",
//             cancelButtonText: "Cancel",
//             reverseButtons: true,
//         });

//         if (!result.isConfirmed) return;

//         setGenerations(prev =>
//             prev.map(item =>
//                 item.id === projectId
//                     ? { ...item, isPublished: !item.isPublished }
//                     : item
//             )
//         );

//         await Swal.fire({
//             icon: "success",
//             title: gen.isPublished ? "Unpublished!" : "Published!",
//             timer: 1200,
//             showConfirmButton: false,
//         });

//         console.log("Toggled publish for:", projectId);
//     };

//     return (
//         <div className="mb-4 break-inline-avoid">
//             <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group">
//                 {/* Preview */}
//                 <div
//                     className={`${gen.aspectRatio === "9:16"
//                             ? "aspect-9/16"
//                             : "aspect-video"
//                         } relative overflow-hidden`}
//                 >
//                     {gen.generatedImage && (
//                         <img
//                             src={gen.generatedImage}
//                             alt={gen.productName}
//                             className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${gen.generatedVideo
//                                     ? "group-hover:opacity-0"
//                                     : "group-hover:scale-105"
//                                 }`}
//                         />
//                     )}

//                     {gen.generatedVideo && (
//                         <video
//                             src={gen.generatedVideo}
//                             muted
//                             loop
//                             playsInline
//                             className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
//                             onMouseEnter={e => e.currentTarget.play()}
//                             onMouseLeave={e => e.currentTarget.pause()}
//                         />
//                     )}

//                     {!gen.generatedImage && !gen.generatedVideo && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                             <LoaderIcon className="size-7 animate-spin" />
//                         </div>
//                     )}

//                     {/* Status badges */}
//                     <div className="absolute left-3 top-3 flex gap-2">
//                         {gen.isGenerating && (
//                             <span className="text-xs px-2 py-1 bg-yellow-600/30 rounded-full">
//                                 Generating...
//                             </span>
//                         )}
//                         {gen.isPublished ? (
//                             <span className="text-xs px-2 py-1 bg-green-600/30 rounded-full">
//                                 Published
//                             </span>
//                         ) : (
//                             <span className="text-xs px-2 py-1 bg-gray-600/30 rounded-full">
//                                 Unpublished
//                             </span>
//                         )}
//                     </div>

//                     {/* Menu */}
//                     {!forCommunity && (
//                         <div className="absolute right-3 top-3">
//                             <div className="relative">
//                                 <button
//                                     onClick={() =>
//                                         setMenuOpen(prev => !prev)
//                                     }
//                                     onBlur={() =>
//                                         setTimeout(
//                                             () => setMenuOpen(false),
//                                             100
//                                         )
//                                     }
//                                     className="sm:opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 rounded-full p-1.5"
//                                 >
//                                     <EllipsisIcon className="size-5" />
//                                 </button>

//                                 {menuOpen && (
//                                     <div className="absolute right-0 mt-2 w-48 bg-black/90 text-white border border-gray-700/50 rounded-lg shadow-lg z-20">
//                                         {gen.generatedImage && (
//                                             <a
//                                                 href={gen.generatedImage}
//                                                 download
//                                                 className="flex items-center gap-2 px-4 py-2 hover:bg-white/10"
//                                             >
//                                                 <ImageIcon className="size-4" />
//                                                 Download Image
//                                             </a>
//                                         )}
//                                         {gen.generatedVideo && (
//                                             <a
//                                                 href={gen.generatedVideo}
//                                                 download
//                                                 className="flex items-center gap-2 px-4 py-2 hover:bg-white/10"
//                                             >
//                                                 <VideoIcon className="size-4" />
//                                                 Download Video
//                                             </a>
//                                         )}
//                                         {(gen.generatedImage ||
//                                             gen.generatedVideo) && (
//                                                 <button
//                                                     onClick={() =>
//                                                         navigator.share({
//                                                             title: gen.productName,
//                                                             text: gen.productDescription,
//                                                             url:
//                                                                 gen.generatedImage ||
//                                                                 gen.generatedVideo,
//                                                         })
//                                                     }
//                                                     className="w-full flex items-center gap-2 px-4 py-2 hover:bg-white/10 text-left"
//                                                 >
//                                                     <ShareIcon className="size-4" />
//                                                     Share
//                                                 </button>
//                                             )}
//                                         <div className="border-t border-gray-700/50 my-1" />
//                                         <button
//                                             onClick={() =>
//                                                 handleDelete(gen.id)
//                                             }
//                                             className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-900/20 text-red-400 text-left"
//                                         >
//                                             <Trash2Icon className="size-4" />
//                                             Delete Project
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}

//                     {/* Source images */}
//                     <div className="absolute right-3 bottom-3 flex">
//                         <img
//                             src={gen.uploadedImages[0]}
//                             className="w-16 h-16 object-cover rounded-full"
//                         />
//                         <img
//                             src={gen.uploadedImages[1]}
//                             className="w-16 h-16 object-cover rounded-full -ml-8"
//                         />
//                     </div>
//                 </div>

//                 {/* Details */}
//                 <div className="p-4">
//                     <h3 className="font-medium text-lg">
//                         {gen.productName}
//                     </h3>

//                     {!forCommunity && (
//                         <div className="mt-4 grid grid-cols-2 gap-3">
//                             <GhostButton
//                                 onClick={() => {
//                                     navigate(`/result/${gen.id}`);
//                                     scrollTo(0, 0);
//                                 }}
//                             >
//                                 View Details
//                             </GhostButton>

//                             <PrimaryButton
//                                 onClick={() =>
//                                     handleTogglePublish(gen.id)
//                                 }
//                                 className={`rounded-md ${gen.isPublished
//                                         ? "bg-red-500 hover:bg-red-600"
//                                         : "bg-indigo-500 hover:bg-indigo-600"
//                                     }`}
//                             >
//                                 {gen.isPublished
//                                     ? "Unpublish"
//                                     : "Publish"}
//                             </PrimaryButton>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectCard;


import {
    EllipsisIcon,
    ImageIcon,
    LoaderIcon,
    ShareIcon,
    Trash2Icon,
    VideoIcon
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import type { project } from "../types/Community";
import { GhostButton, PrimaryButton } from "./Buttons";

const ProjectCard = ({
    gen,
    setGenerations,
    forCommunity = false,
}: {
    gen: project;
    setGenerations: React.Dispatch<React.SetStateAction<project[]>>;
    forCommunity?: boolean;
}) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Configure SweetAlert2 with dark theme
    const swalDarkTheme = Swal.mixin({
        background: "#0f172a",
        color: "#f1f5f9",
        confirmButtonColor: gen?.isPublished ? "#ef4446" : "#4f46e6",
        cancelButtonColor: "#475569",
        denyButtonColor: "#374151",
        backdrop: "rgba(0, 0, 0, 0.8)",
        customClass: {
            popup: "border border-white/10 rounded-xl",
            title: "text-gray-100 font-semibold",
            htmlContainer: "text-gray-300",
            confirmButton: "px-4 py-2 rounded-lg font-medium transition-colors",
            cancelButton: "px-4 py-2 rounded-lg font-medium transition-colors",
            actions: "gap-3",
            closeButton: "text-gray-400 hover:text-white",
            icon: "border-gray-600"
        },
        buttonsStyling: false,
        reverseButtons: true,
        showClass: {
            popup: 'animate__animated animate__fadeIn animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut animate__faster'
        }
    });

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && 
                !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    /* ---------------- DELETE ---------------- */
    const handleDelete = async (id: string) => {
        // Close menu immediately before showing alert
        setMenuOpen(false);
        
        // Small delay to ensure menu is closed
        await new Promise(resolve => setTimeout(resolve, 10));
        
        const result = await swalDarkTheme.fire({
            title: "Delete Project?",
            html: `
                <div class="text-left space-y-2">
                    <p class="text-gray-300">Are you sure you want to delete this project?</p>
                    <div class="mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <p class="font-medium text-gray-200">${gen.productName}</p>
                        ${gen.productDescription ? `<p class="text-sm text-gray-400 mt-1">${gen.productDescription.substring(0, 100)}${gen.productDescription.length > 100 ? '...' : ''}</p>` : ''}
                    </div>
                    <p class="text-sm text-amber-400 mt-2">This action cannot be undone.</p>
                </div>
            `,
            icon: "warning",
            iconColor: "#f59e0b",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#dc2626",
        });

        if (!result.isConfirmed) return;

        setGenerations(prev => prev.filter(g => g.id !== id));
        
        await swalDarkTheme.fire({
            icon: "success",
            iconColor: "#10b981",
            title: "Deleted!",
            text: "Project has been deleted.",
            timer: 1500,
            showConfirmButton: false,
        });

        console.log("Deleted:", id);
    };

    /* ---------------- SHARE FUNCTION ---------------- */
    const handleShare = async () => {
        const shareUrl = gen.generatedImage || gen.generatedVideo;
        const shareTitle = gen.productName;
        const shareText = gen.productDescription || "Check out this project!";
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: shareTitle,
                    text: shareText,
                    url: shareUrl,
                });
            } catch (error) {
                // User cancelled or error occurred
                console.log("Share cancelled:", error);
            }
        } else {
            // Fallback for desktop: copy to clipboard
            try {
                await navigator.clipboard.writeText(shareUrl);
                swalDarkTheme.fire({
                    icon: "success",
                    iconColor: "#10b981",
                    title: "Copied!",
                    text: "Link copied to clipboard",
                    timer: 1500,
                    showConfirmButton: false,
                });
            } catch (error) {
                // Fallback if clipboard fails
                swalDarkTheme.fire({
                    icon: "info",
                    iconColor: "#3b82f6",
                    title: "Copy Link",
                    html: `
                        <div class="text-left">
                            <p class="text-gray-300 mb-2">Copy this link to share:</p>
                            <div class="p-2 bg-white/5 rounded border border-white/10 overflow-x-auto">
                                <code class="text-sm text-gray-200">${shareUrl}</code>
                            </div>
                        </div>
                    `,
                    confirmButtonText: "OK",
                });
            }
        }
        
        setMenuOpen(false);
    };

    /* ---------------- PUBLISH / UNPUBLISH ---------------- */
    const handleTogglePublish = async (projectId: string) => {
        const isPublished = gen.isPublished;
        const action = isPublished ? "unpublish" : "publish";
        
        const result = await swalDarkTheme.fire({
            title: `${isPublished ? "Unpublish" : "Publish"} Project?`,
            html: `
                <div class="text-left space-y-3">
                    <div class="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        ${gen.generatedImage ? `
                            <img src="${gen.generatedImage}" 
                                 alt="${gen.productName}" 
                                 class="w-16 h-16 object-cover rounded-md"
                            />
                        ` : ''}
                        <div>
                            <p class="font-medium text-gray-200">${gen.productName}</p>
                            ${gen.aspectRatio ? `<p class="text-xs text-gray-400 mt-1">Aspect: ${gen.aspectRatio}</p>` : ''}
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <p class="text-gray-300">
                            ${isPublished 
                                ? "This project will be removed from the community and no longer visible to others." 
                                : "This project will be visible to everyone in the community."}
                        </p>
                        
                        <div class="flex items-center gap-2 mt-2 p-2 ${isPublished ? 'bg-red-950/20 border border-red-800/30' : 'bg-indigo-950/20 border border-indigo-800/30'} rounded-lg">
                            <div class="w-2 h-2 rounded-full ${isPublished ? 'bg-red-500' : 'bg-indigo-500'}"></div>
                            <span class="text-sm ${isPublished ? 'text-red-300' : 'text-indigo-300'}">
                                ${isPublished ? "Currently Published" : "Currently Unpublished"}
                            </span>
                        </div>
                    </div>
                </div>
            `,
            icon: isPublished ? "question" : "info",
            iconColor: isPublished ? "#f59e0b" : "#8b5cf6",
            showCancelButton: true,
            confirmButtonText: isPublished ? "Unpublish" : "Publish",
            cancelButtonText: "Cancel",
            confirmButtonColor: isPublished ? "#dc2626" : "#4f46e5",
        });

        if (!result.isConfirmed) return;

        setGenerations(prev =>
            prev.map(item =>
                item.id === projectId
                    ? { ...item, isPublished: !item.isPublished }
                    : item
            )
        );

        await swalDarkTheme.fire({
            icon: "success",
            iconColor: "#10b981",
            title: isPublished ? "Unpublished!" : "Published!",
            html: `
                <div class="text-center">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full ${isPublished ? 'bg-red-900/30' : 'bg-indigo-900/30'} mb-3">
                        ${isPublished 
                            ? '<svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" /></svg>'
                            : '<svg class="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>'
                        }
                    </div>
                    <p class="text-gray-300">
                        Project has been ${isPublished ? 'unpublished' : 'published'} successfully!
                    </p>
                </div>
            `,
            timer: 1500,
            showConfirmButton: false,
        });

        console.log(`Toggled ${action} for:`, projectId);
    };

    return (
        <div className="mb-4 break-inline-avoid relative">
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group relative">
                {/* Preview */}
                <div
                    className={`${gen.aspectRatio === "9:16"
                            ? "aspect-9/16"
                            : "aspect-video"
                        } relative overflow-hidden`}
                >
                    {gen.generatedImage && (
                        <img
                            src={gen.generatedImage}
                            alt={gen.productName}
                            className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${gen.generatedVideo
                                    ? "group-hover:opacity-0"
                                    : "group-hover:scale-105"
                                }`}
                        />
                    )}

                    {gen.generatedVideo && (
                        <video
                            src={gen.generatedVideo}
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                            onMouseEnter={e => e.currentTarget.play()}
                            onMouseLeave={e => e.currentTarget.pause()}
                        />
                    )}

                    {!gen.generatedImage && !gen.generatedVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <LoaderIcon className="size-7 animate-spin" />
                        </div>
                    )}

                    {/* Status badges */}
                    <div className="absolute left-3 top-3 flex gap-2">
                        {gen.isGenerating && (
                            <span className="text-xs px-2 py-1 bg-yellow-600/30 rounded-full">
                                Generating...
                            </span>
                        )}
                        {gen.isPublished ? (
                            <span className="text-xs px-2 py-1 bg-green-600/30 rounded-full">
                                Published
                            </span>
                        ) : (
                            <span className="text-xs px-2 py-1 bg-gray-600/30 rounded-full">
                                Unpublished
                            </span>
                        )}
                    </div>

                    {/* Menu */}
                    {!forCommunity && (
                        <div className="absolute right-3 top-3 z-30">
                            <div className="relative">
                                <button
                                    ref={buttonRef}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setMenuOpen(prev => !prev);
                                    }}
                                    className="sm:opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-white/20"
                                >
                                    <EllipsisIcon className="size-5" />
                                </button>

                                {menuOpen && (
                                    <div 
                                        ref={menuRef}
                                        className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm text-white border border-gray-700 rounded-lg shadow-xl z-50"
                                    >
                                        {gen.generatedImage && (
                                            <a
                                                href={gen.generatedImage}
                                                download={`${gen.productName.replace(/\s+/g, '-')}-image.jpg`}
                                                className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 transition-colors"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                <ImageIcon className="size-4" />
                                                Download Image
                                            </a>
                                        )}
                                        {gen.generatedVideo && (
                                            <a
                                                href={gen.generatedVideo}
                                                download={`${gen.productName.replace(/\s+/g, '-')}-video.mp4`}
                                                className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 transition-colors"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                <VideoIcon className="size-4" />
                                                Download Video
                                            </a>
                                        )}
                                        {(gen.generatedImage || gen.generatedVideo) && (
                                            <button
                                                onClick={handleShare}
                                                className="w-full flex items-center gap-2 px-4 py-3 hover:bg-white/10 transition-colors text-left"
                                            >
                                                <ShareIcon className="size-4" />
                                                Share
                                            </button>
                                        )}
                                        <div className="border-t border-gray-700 my-1" />
                                        <button
                                            onClick={() => handleDelete(gen.id)}
                                            className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-900/30 text-red-400 transition-colors text-left"
                                        >
                                            <Trash2Icon className="size-4" />
                                            Delete Project
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Source images */}
                    <div className="absolute right-3 bottom-3 flex z-10">
                        <img
                            src={gen.uploadedImages[0]}
                            alt="Product"
                            className="w-16 h-16 object-cover rounded-full border-2 border-white/20"
                        />
                        <img
                            src={gen.uploadedImages[1]}
                            alt="Model"
                            className="w-16 h-16 object-cover rounded-full -ml-8 border-2 border-white/20"
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="p-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-lg text-gray-100 truncate">{gen.productName}</h3>
                            <p className="text-sm text-gray-400 mt-1">Created: {new Date(gen.createdAt).toLocaleString()}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-white/5 rounded-2xl whitespace-nowrap flex-shrink-0">
                            Aspect: {gen.aspectRatio}
                        </span>
                    </div>

                    {/* Product Description */}
                    {gen.productDescription && (
                        <div className="mt-3">
                            <p className="text-xs text-gray-400 mb-1">Description:</p>
                            <div className="text-sm text-gray-300 bg-white/3 p-2 rounded-md wrap-break-word">
                                {gen.productDescription}
                            </div>
                        </div>
                    )}

                    {/* User Prompt */}
                    {gen.userPrompt && (
                        <div className="mt-3">
                            <p className="text-xs text-gray-400 mb-1">User Prompt:</p>
                            <div className="text-sm text-gray-300 bg-white/3 p-2 rounded-md wrap-break-word">
                                {gen.userPrompt}
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    {!forCommunity && (
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <GhostButton
                                onClick={() => {
                                    navigate(`/result/${gen.id}`);
                                    scrollTo(0, 0);
                                }}
                                className="hover:bg-white/10 transition-colors"
                            >
                                View Details
                            </GhostButton>

                            <PrimaryButton
                                onClick={() => handleTogglePublish(gen.id)}
                                className={`rounded-md transition-colors ${gen.isPublished
                                        ? "bg-red-600 hover:bg-red-700"
                                        : "bg-indigo-600 hover:bg-indigo-700"
                                    }`}
                            >
                                {gen.isPublished ? "Unpublish" : "Publish"}
                            </PrimaryButton>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

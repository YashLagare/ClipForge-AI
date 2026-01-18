// import { AnimatePresence, motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';

// const SLIDE_IMAGES = [
//   'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop'
// ];

// const AUTO_SLIDE_INTERVAL = 4500; // 4.5 seconds

// export default function HeroBackgroundSlider() {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
//   const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   // Auto-advance slides
//   useEffect(() => {
//     const startAutoSlide = () => {
//       autoSlideRef.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
//       }, AUTO_SLIDE_INTERVAL);
//     };

//     startAutoSlide();

//     return () => {
//       if (autoSlideRef.current) {
//         clearInterval(autoSlideRef.current);
//       }
//     };
//   }, []);

//   // Reset auto-slide timer on manual navigation
//   const resetAutoSlide = (): void => {
//     if (autoSlideRef.current) {
//       clearInterval(autoSlideRef.current);
//     }
//     autoSlideRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
//     }, AUTO_SLIDE_INTERVAL);
//   };

//   const goToSlide = (index: number): void => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentSlide(index);
//     resetAutoSlide();
//     setTimeout(() => setIsTransitioning(false), 800);
//   };

//   const goToPrevious = (): void => {
//     const newIndex = currentSlide === 0 ? SLIDE_IMAGES.length - 1 : currentSlide - 1;
//     goToSlide(newIndex);
//   };

//   const goToNext = (): void => {
//     const newIndex = (currentSlide + 1) % SLIDE_IMAGES.length;
//     goToSlide(newIndex);
//   };

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden">
//       {/* Image layers with crossfade */}
//       <AnimatePresence mode="sync">
//         {SLIDE_IMAGES.map((image, index) => (
//           index === currentSlide && (
//             <motion.div
//               key={image}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               className="absolute inset-0"
//             >
//               <img
//                 src={image}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           )
//         ))}
//       </AnimatePresence>

//       {/* Enhanced gradient overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

//       {/* Previous Arrow - Left Side */}
//       <button
//         onClick={goToPrevious}
//         disabled={isTransitioning}
//         className="absolute left-4 bottom-20 xl:top-1/2 xl:-translate-y-1/2 xl:bottom-auto z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Next Arrow - Right Side */}
//       <button
//         onClick={goToNext}
//         disabled={isTransitioning}
//         className="absolute right-4 bottom-20 xl:top-1/2 xl:-translate-y-1/2 xl:bottom-auto z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Slide Indicators - Dots at Bottom */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//         {SLIDE_IMAGES.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             disabled={isTransitioning}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-8 bg-indigo-400'
//                 : 'w-2 bg-white/50 hover:bg-white/75'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SLIDE_IMAGES = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop'
];

const AUTO_SLIDE_INTERVAL = 4500; // 4.5 seconds

export default function HeroBackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance slides
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
      }, AUTO_SLIDE_INTERVAL);
    };

    startAutoSlide();

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

  // Reset auto-slide timer on manual navigation
  const resetAutoSlide = (): void => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const goToSlide = (index: number): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToPrevious = (): void => {
    const newIndex = currentSlide === 0 ? SLIDE_IMAGES.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  };

  const goToNext = (): void => {
    const newIndex = (currentSlide + 1) % SLIDE_IMAGES.length;
    goToSlide(newIndex);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Image layers with crossfade */}
      <AnimatePresence mode="sync">
        {SLIDE_IMAGES.map((image, index) => (
          index === currentSlide && (
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      {/* Previous Arrow - Left Side - FIXED FOR MOBILE */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Next Arrow - Right Side - FIXED FOR MOBILE */}
      <button
        onClick={goToNext}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators - Dots at Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDE_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-indigo-400'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
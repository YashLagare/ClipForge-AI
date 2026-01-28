// 'use client';

// import { useEffect } from 'react';
// import Lenis from 'lenis';

// export default function LenisScroll() {
//     useEffect(() => {
//         const lenis = new Lenis({
//             duration: 1.2,
//             smoothWheel: true,
//             anchors: {
//                 offset: -100,
//             },
//         });

//         const raf = (time: number) => {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         };

//         requestAnimationFrame(raf);

//         return () => {
//             lenis.destroy();
//         };
//     }, []);

//     return null;
// }


'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      anchors: {
        offset: -100,
      },
    });

    // ✅ expose globally
    (window as any).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return null;
}

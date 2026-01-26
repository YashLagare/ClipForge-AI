
import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Discover & Strategize',
        desc: 'We deep-dive into your product, audience, and goals to define a focused strategy that sets a clear direction.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Design & Build',
        desc: 'We design intuitive experiences and build scalable solutions using modern, performance-first technologies.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Launch & Scale',
        desc: 'We launch, analyze, and continuously optimize to drive growth, engagement, and long-term success.'
    }
];


// export const plansData = [
//     {
//         id: 'starter',
//         name: 'Starter',
//         price: '$499',
//         desc: 'Best for early-stage startups.',
//         credits: 'One-time',
//         features: [
//             'Project discovery & planning',
//             'UI/UX design',
//             'Basic website development',
//             '1 revision round',
//             'Email support'
//         ]
//     },
//     {
//         id: 'pro',
//         name: 'Growth',
//         price: '$1,499',
//         desc: 'Growing teams and businesses.',
//         credits: 'Monthly',
//         features: [
//             'Everything in Starter',
//             'Advanced UI/UX design',
//             'Custom development',
//             'Performance optimization',
//             'Priority support'
//         ],
//         popular: true
//     },
//     {
//         id: 'ultra',
//         name: 'Scale',
//         price: '$3,999',
//         desc: 'For brands ready to scale fast.',
//         credits: 'Custom',
//         features: [
//             'Everything in Growth',
//             'Dedicated project manager',
//             'Ongoing optimization',
//             'Marketing & growth support',
//             'Chat + Email support'
//         ]
//     }
// ];
export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$19',
        credits: 80,
        desc: 'Perfect for creators and small businesses getting started with AI ads.',
        features: [
            '80 Credits',
            'Image & short video ad formats',
            'Basic copy & headline generation',
            'Standard export quality',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Growth',
        price: '$49',
        credits: 200,
        desc: 'Best for marketers and growing teams running ads consistently.',
        features: [
            'Everything in Starter',
            '200 Credits',
            'Advanced ad copy & creatives',
            'Multiple platform formats',
            'Brand tone & style presets',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'scale',
        name: 'Scale',
        price: '$99',
        credits: 500,
        desc: 'Designed for agencies and brands scaling ad performance.',
        features: [
            'Everything in Growth',
            '500 Credits',
            'Unlimited ad generation',
            'High-resolution & commercial exports',
            'Team collaboration',
            'Performance insights & optimization',
            'Chat + email support'
        ]
    }
];

export const faqData = [
    {
        question: 'What is ClipForge AI?',
        answer: 'ClipForge AI is an AI-powered platform that helps you generate high-performing ad creatives, headlines, and short videos in minutes for platforms like social media and digital ads.'
    },
    {
        question: 'Who is ClipForge AI for?',
        answer: 'ClipForge AI is built for creators, marketers, startups, agencies, and businesses who want to create ads faster without hiring designers or spending hours on manual work.'
    },
    {
        question: 'Do I need design or marketing experience to use it?',
        answer: 'No. ClipForge AI is designed to be beginner-friendly. You simply provide basic input, and the AI handles the creative, copy, and formatting for your ads.'
    },
    {
        question: 'How does pricing work?',
        answer: 'Pricing is subscription-based and depends on the number of ads you generate and the features you need. You can upgrade or downgrade your plan anytime.'
    },
    {
        question: 'Can I use the generated ads commercially?',
        answer: 'Yes. All generated ads can be used for commercial purposes, including paid campaigns, client work, and brand promotions.'
    },
    {
        question: 'Is there customer support available?',
        answer: 'Yes. We offer email support on all plans, with priority chat support available on higher-tier plans.'
    }
];


export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "/" },
            { name: "Create", url: "/generate" },
            { name: 'My-generated ads', url: '/my-generation' },
            { name: "Community", url: "/community" },
            { name: "Plans", url: "/plans" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "/privacy-policy" },
            { name: "Terms of Service", url: "/terms-of-service" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: " Portfolio", target: "_blank", url: "https://yashlagare.github.io/yash-lagare-portfolio/" },
            { name: "Instagram", target: "_blank", url: "https://www.instagram.com/yashlagare/?hl=en" },
            { name: "LinkedIn", target: "_blank", url: "https://www.linkedin.com/in/yash-lagare-814b37299" },
            { name: "GitHub", target: "_blank", url: "https://github.com/YashLagare" }
        ]
    }
];
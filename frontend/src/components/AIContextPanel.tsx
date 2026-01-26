import { Brain, Sparkles } from "lucide-react";

const steps = [
    "Analyzing product visuals",
    "Understanding brand & audience",
    "Generating creative concepts",
    "Optimizing for platform performance",
];

export default function AIContextPanel() {
    return (
        <div className="
      rounded-2xl p-6
      bg-white/5 backdrop-blur-xl
      border border-white/10
    ">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-violet-500/20">
                    <Brain className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="font-semibold text-lg">AI Creative Engine</h3>
            </div>

            <p className="text-sm text-gray-400 mb-6">
                ClipForge AI analyzes your inputs and generates optimized ad creatives
                designed to convert.
            </p>

            <ul className="space-y-3 text-sm">
                {steps.map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                        {step}
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                AI runs in real-time
            </div>
        </div>
    );
}

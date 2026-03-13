import { useEffect, useState } from 'react';

export default function TypewriterAnimation() {
    const [textIndex, setTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const beforeText = "Our Annual Report for 2026 is Now Available";
    const afterText = "The 2026 Impact Report: Scaling Institutional Authority in the AI Era";

    const [displayText, setDisplayText] = useState("");
    const [showAfter, setShowAfter] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const targetText = showAfter ? afterText : beforeText;

        if (isTyping) {
            if (textIndex < targetText.length) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev + targetText[textIndex]);
                    setTextIndex(prev => prev + 1);
                }, 50);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
            }
        } else {
            if (textIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                    setTextIndex(prev => prev - 1);
                }, 30);
            } else {
                setShowAfter(!showAfter);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [textIndex, isTyping, showAfter]);
    return (
        <div className="mb-12 min-h-[120px]">
            <span className="font-mono text-xs text-slate-800/40 uppercase tracking-widest mb-4 block">
                {showAfter ? 'Sublime UX Optimized' : 'Generic Approach'}
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
                {displayText}
                <span className="inline-block w-[3px] h-[1em] bg-brand-teal ml-1 animate-pulse align-middle" />
            </h3>
        </div>
    );
}
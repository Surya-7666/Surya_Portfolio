import { useState } from "react";
import type { inputProps } from "../../../types/type";

const Textarea = ({ label, name, required = false }: inputProps) => {

    const [focused, setFocused] = useState(false);

    return (
        <div className="w-full relative mt-4">

            <textarea name={name} placeholder=" " required={required} rows={5} onFocus={() => setFocused(true)} onBlur={(e) => setFocused(!!e.target.value)} className="peer w-full px-1 py-2 bg-transparent text-(--text-primary) border-b border-(--border-dark) outline-none resize-none transition-all duration-300 focus:border-(--avo-primary)" />

            <label className={`absolute left-0 text-(--text-muted) pointer-events-none transition-all duration-300 ${focused ? "-top-3 text-xs text-(--avo-primary)" : "top-1/2 left-1/2 -translate-1/2"} peer-focus:-top-3 peer-focus:text-xs peer-focus:text-(--avo-primary)`}>
                {label}

                {required && (
                    <span className="text-orange-500 ml-1">*</span>
                )}
            </label>

            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-(--avo-primary) transition-all duration-300 peer-focus:w-full"></span>

        </div>
    );
};

export default Textarea;
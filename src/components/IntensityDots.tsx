import React from "react";

type Intensity = "Low" | "Med" | "High";

interface IntensityDotsProps {
    intensity: Intensity;
}

export default function IntensityDots({ intensity }: IntensityDotsProps) {
    const getFilledCount = (level: Intensity) => {
        switch (level) {
            case "Low":
                return 1;
            case "Med":
                return 2;
            case "High":
                return 3;
            default:
                return 1;
        }
    };

    const filledCount = getFilledCount(intensity);

    return (
        <div
            className="flex gap-1 items-center"
            aria-label={`Intensity: ${intensity}`}
            role="img"
        >
            {[1, 2, 3].map((dot) => (
                <div
                    key={dot}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${dot <= filledCount ? "bg-sage-dark" : "bg-gray-300/50"
                        }`}
                />
            ))}
        </div>
    );
}

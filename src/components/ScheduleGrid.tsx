import React from "react";
import IntensityDots from "./IntensityDots";

type ClassData = {
    day: string;
    time: string;
    name: string;
    instructor: string;
    intensity: "Low" | "Med" | "High";
};

const scheduleData: ClassData[] = [
    { day: "MON", time: "07:00", name: "Sunrise Vinyasa", instructor: "Sarah", intensity: "High" },
    { day: "MON", time: "18:00", name: "Power Pilates", instructor: "James", intensity: "High" },
    { day: "TUE", time: "08:00", name: "Slow Flow", instructor: "Sarah", intensity: "Low" },
    { day: "WED", time: "19:00", name: "Candlelit Yin", instructor: "Mia", intensity: "Low" },
    { day: "THU", time: "12:30", name: "Lunchtime Express", instructor: "James", intensity: "Med" },
    { day: "FRI", time: "17:00", name: "Happy Hour Flow", instructor: "Mia", intensity: "Med" },
    { day: "SAT", time: "10:00", name: "Weekend Warrior", instructor: "Sarah", intensity: "High" },
];

export default function ScheduleGrid() {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm">
            {/* Desktop Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-sage/10 font-heading font-bold text-sage-dark border-b border-gray-200">
                <div className="col-span-1">TIME</div>
                <div className="col-span-2">CLASS</div>
                <div className="col-span-1">INSTRUCTOR</div>
                <div className="col-span-1 text-right">INTENSITY</div>
            </div>

            {/* Grid Content */}
            <div className="divide-y divide-gray-100">
                {scheduleData.map((item, index) => (
                    <div
                        key={index}
                        className="group grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 p-4 hover:bg-white transition-colors duration-300 items-center"
                    >
                        {/* Mobile: Day & Time combined */}
                        <div className="col-span-1 flex md:block items-center gap-2 font-bold text-charcoal">
                            <span className="md:hidden bg-sage text-white text-xs px-2 py-0.5 rounded">
                                {item.day}
                            </span>
                            <span className="font-mono text-sm md:text-base">
                                <span className="hidden md:inline text-sage-dark mr-2">{item.day}</span>
                                {item.time}
                            </span>
                        </div>

                        {/* Class Name */}
                        <div className="col-span-1 md:col-span-2 font-heading text-lg text-charcoal group-hover:text-sage-dark transition-colors">
                            {item.name}
                        </div>

                        {/* Instructor */}
                        <div className="col-span-1 text-sm text-gray-500">
                            <span className="md:hidden mr-1">with</span>
                            {item.instructor}
                        </div>

                        {/* Intensity */}
                        <div className="col-span-1 flex md:justify-end items-center gap-2">
                            <span className="md:hidden text-xs text-gray-400 uppercase tracking-wider">
                                Intensity
                            </span>
                            <IntensityDots intensity={item.intensity} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

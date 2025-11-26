"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}

export default function PricingCard({
    title,
    price,
    features,
    isPopular = false,
}: PricingCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={`relative p-8 rounded-2xl border ${isPopular
                    ? "border-sage bg-white shadow-lg"
                    : "border-gray-200 bg-white/50"
                } flex flex-col h-full transition-colors duration-300`}
        >
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
            )}

            <h3 className="font-heading text-xl text-charcoal mb-2">{title}</h3>
            <div className="text-3xl font-heading text-sage-dark mb-6">{price}</div>

            <ul className="flex-1 space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-3 rounded-lg font-bold text-sm transition-all duration-300 ${isPopular
                        ? "bg-terracotta text-white hover:bg-terracotta-hover shadow-md hover:shadow-lg"
                        : "bg-sage/10 text-sage-dark hover:bg-sage hover:text-white"
                    }`}
            >
                CHOOSE PLAN
            </button>
        </motion.div>
    );
}

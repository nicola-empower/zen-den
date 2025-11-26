"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScheduleGrid from "@/components/ScheduleGrid";
import PricingCard from "@/components/PricingCard";
import AccordionItem from "@/components/AccordionItem";
import StickyBookButton from "@/components/StickyBookButton";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  return (
    <main className="min-h-screen pb-20 md:pb-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero.png"
            alt="Zen Den Yoga Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide drop-shadow-md"
          >
            MOVEMENT FOR THE MODERN MIND.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-light"
          >
            A sanctuary in the city. Disconnect to reconnect through Yoga, Pilates, and Breathwork.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-sm font-bold"
          >
            View Schedule
          </motion.button>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-20 md:py-32 px-4 bg-alabaster">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="order-2 md:order-1"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mb-6">
              BREATHE. MOVE. BE.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The Zen Den is not just a studio; it is a pause button. In a world that demands constant speed, we invite you to slow down. Our practice is rooted in tradition but designed for modern life.
            </p>
            <div className="h-1 w-20 bg-sage rounded-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/intro.png"
              alt="Monstera Leaf Shadow"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mb-4">
              THIS WEEK ON THE MAT.
            </h2>
            <p className="text-gray-500">Find your flow, from sunrise to sunset.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ScheduleGrid />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-alabaster">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mb-4">
              INVEST IN YOURSELF.
            </h2>
            <p className="text-gray-500">Flexible options for every lifestyle.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="h-full">
              <PricingCard
                title="THE PAUSE"
                price="£15"
                features={["Single Class Pass", "14-day expiry", "Mat included"]}
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="h-full">
              <PricingCard
                title="THE FLOW"
                price="£120"
                features={["10 Class Pass", "3-month expiry", "Priority booking"]}
                isPopular
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="h-full">
              <PricingCard
                title="THE RITUAL"
                price="£90 / month"
                features={["Unlimited Classes", "Free workshops", "10% off retail"]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mb-4">
              COMMON QUESTIONS.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <AccordionItem
              question="Do I need to bring my own mat?"
              answer="We provide high-quality organic cork mats for all students. You are welcome to bring your own if you prefer."
            />
            <AccordionItem
              question="I've never done Pilates before. Is that okay?"
              answer="Absolutely. All our classes are open level. Our instructors are trained to offer modifications for beginners and advanced practitioners alike."
            />
            <AccordionItem
              question="What is the cancellation policy?"
              answer="Life happens. Cancel up to 4 hours before class for a full credit return."
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading text-2xl">THE ZEN DEN</div>
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} The Zen Den. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Button */}
      <StickyBookButton />
    </main>
  );
}

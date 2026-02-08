"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Angel Series Coaching
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Coaching for clarity, focus, and calm momentum.
          </h1>
          <p className="text-lg text-muted-foreground">
            Private coaching that blends compassionate support with practical
            strategy. Define your goals, build consistent habits, and lead with
            confidence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-brand-100 blur-2xl" />
          <Image
            src="/images/hero-placeholder.svg"
            alt="Angel Series Coaching hero"
            width={1200}
            height={700}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative rounded-3xl shadow-lift"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

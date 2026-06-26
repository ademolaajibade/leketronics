'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/lib/motion';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? 'visible' : 'hidden';

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white"
    >
      <div className="container-width section-padding grid min-h-[85vh] items-center gap-12 py-16 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-2 lg:py-0">
        <motion.div initial={initial} animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
          <motion.div
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700"
          >
            <Zap className="size-4" aria-hidden="true" />
            {`Lagos's #1 Solar Installer`}
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-display-lg font-bold text-balance text-slate-900 sm:text-display-xl"
          >
            Cut Your Electricity Bill by Up to 90%. Permanently.
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-lg text-slate-600">
            SolarGenius Renewables installs premium solar systems for Lagos homes and businesses.
            No more generator noise. No more EKEDC surprises. Just clean, reliable power — every
            day.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button asChild size="xl">
              <Link href="/contact">Get a Free Site Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/social-proof">See Our Installations</Link>
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm font-medium text-slate-500">
            450+ Installations &middot; 8 Years in Lagos &middot; 24/7 Support
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-card-lg lg:aspect-square"
        >
          {/* Replace src with your image path, e.g. "/images/hero.jpg" */}
          <Image
            src="/images/hero.jpg"
            alt="Solar installation"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

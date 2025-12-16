import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(30 58 138)",
    "rgb(29 78 216)",
    "rgb(37 99 235)",
    "rgb(30 58 138)",
    "rgb(17 24 39)",
    "rgb(0 0 0)",
  ];

  const linearGradients = [
    "linear-gradient(135deg, rgb(6 182 212) 0%, rgb(16 185 129) 100%)",
    "linear-gradient(135deg, rgb(236 72 153) 0%, rgb(168 85 247) 100%)",
    "linear-gradient(135deg, rgb(249 115 22) 0%, rgb(234 179 8) 100%)",
    "linear-gradient(135deg, rgb(6 182 212) 0%, rgb(59 130 246) 100%)",
    "linear-gradient(135deg, rgb(16 185 129) 0%, rgb(5 150 105) 100%)",
    "linear-gradient(135deg, rgb(99 102 241) 0%, rgb(139 92 246) 100%)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.5 }}
      className="h-[42rem] overflow-y-auto flex justify-center relative gap-10 md:gap-16 lg:gap-20 rounded-3xl p-6 md:p-10 lg:p-16 shadow-2xl"
      ref={ref}
    >
      <div className="relative flex items-start w-full max-w-7xl mx-auto">
        <div className="flex-1 pr-4 lg:pr-8">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24 lg:my-32 first:mt-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {item.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-slate-200 max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>

        <motion.div
          style={{ background: backgroundGradient }}
          animate={{
            boxShadow: activeCard % 2 === 0
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              : "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
          }}
          transition={{ duration: 0.5 }}
          className={cn(
            "hidden lg:flex h-[28rem] w-[32rem] rounded-2xl bg-white overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0",
            contentClassName
          )}
        >
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

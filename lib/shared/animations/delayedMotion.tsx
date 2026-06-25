"use client";

import { motion, MotionProps } from "framer-motion";
import { JSX, ReactNode } from "react";

type Props = MotionProps & {
  delay?: number;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export default function DelayedMotion({
  delay = 0,
  children,
  className,
  as = "div",
  ...motionProps
}: Props) {
  const MotionTag = motion[as as keyof typeof motion] as any;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.7,
        ease: "easeOut",
      }}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}

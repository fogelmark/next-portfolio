"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { SectionHeading } from "@/components"

export function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Hello! I'm Alex, a recent graduate with a passion for building{" "}
        <span className="font-medium italic">
          clean and interactive user experiences.
        </span>{" "}
        While I'm fresh out of school, my academic projects and a{" "}
        <span className="font-medium italic">6-month internship</span> gave me
        hands-on experience with React, TypeScript, Tailwind, Git to name a few.
        I'm a quick learner, eager to contribute & extend my tech stack, and always looking for ways to
        push my skills further. I'm currently looking for a{" "}<span className="font-medium italic">full-time position or a paid internship.</span>
        <br />
        Have fun browsing my portfolio. 🙂
      </p>
    </motion.section>
  )
}

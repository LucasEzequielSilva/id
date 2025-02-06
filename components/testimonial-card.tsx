"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { GenericAvatar } from "./generic-avatar"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  index: number
}

export function TestimonialCard({ name, role, content, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-lg p-8 h-full border border-neutral-200 hover:border-neutral-300 transition-colors">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-neutral-600 mb-6">{content}</p>
        <div className="flex items-center gap-3">
          <GenericAvatar />
          <div>
            <p className="font-medium text-neutral-900">{name}</p>
            <p className="text-sm text-neutral-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


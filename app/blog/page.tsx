"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { useTranslations } from "@/lib/i18n"
import { Clock, Tag } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/i18n"

export default function BlogPage() {
  const { t, language } = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState(t("blog.categories.all"))
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const posts = blogPosts[language]
  const categories = Object.values(t("blog.categories"))

  const filteredPosts =
    selectedCategory === t("blog.categories.all") ? posts : posts.filter((post) => post.category === selectedCategory)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">{t("blog.title")}</h1>
          <p className="text-neutral-400 text-lg">{t("blog.subtitle")}</p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors duration-300 z-10" />
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                </div>
                <h2 className="text-xl font-medium text-white group-hover:text-neutral-300 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-neutral-400 line-clamp-2">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-white text-sm hover:text-neutral-300 transition-colors duration-200"
                >
                  {t("blog.readMore")} →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  currentPage === index + 1
                    ? "bg-white text-black"
                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>

      <FloatingFooter />
    </div>
  )
}

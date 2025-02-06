"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { Clock, Tag, User, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/i18n"
import { blogPosts } from "@/lib/i18n"
import { toast } from "sonner"

export default function BlogPostPage() {
  const { t, language } = useTranslations()
  const params = useParams()
  const [post, setPost] = useState<(typeof blogPosts.es)[0] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        // En una aplicación real, esto sería una llamada a la API
        const posts = blogPosts[language]
        const foundPost = posts.find((p) => p.slug === params.slug)
        setPost(foundPost || null)
      } finally {
        setIsLoading(false)
      }
    }

    loadPost()
  }, [params.slug, language])

  const handleShare = async () => {
    const shareData = {
      title: post?.title,
      text: post?.excerpt,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        toast.success(t("blog.shareSuccess"))
      }
    } catch (error) {
      toast.error(t("blog.shareError"))
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-neutral-800 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-neutral-800 rounded w-1/4 mb-8"></div>
              <div className="h-96 bg-neutral-800 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-neutral-800 rounded w-full"></div>
                <div className="h-4 bg-neutral-800 rounded w-5/6"></div>
                <div className="h-4 bg-neutral-800 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
        <FloatingFooter />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-medium text-white mb-4">{t("blog.notFound.title")}</h1>
            <p className="text-neutral-400 mb-8">{t("blog.notFound.description")}</p>
            <Link href="/blog" className="inline-flex items-center text-white hover:text-neutral-200 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("blog.backToBlog")}
            </Link>
          </div>
        </div>
        <FloatingFooter />
      </div>
    )
  }

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
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back to blog link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("blog.backToBlog")}
          </Link>

          {/* Post header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-8">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author.name}
              </span>
            </div>
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </header>

          {/* Post content */}
          <div
            className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-neutral-300 prose-strong:text-white prose-li:text-neutral-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author bio */}
          <div className="mt-12 p-6 bg-neutral-900 rounded-xl flex items-center gap-6">
            <img
              src={post.author.image || "/placeholder.svg"}
              alt={post.author.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-medium text-white mb-2">{post.author.name}</h3>
              <p className="text-neutral-400">{post.author.bio}</p>
            </div>
          </div>

          {/* Share buttons */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              {t("blog.share")}
            </button>
          </div>
        </motion.article>
      </main>

      <FloatingFooter />
    </div>
  )
}


"use client"

import { posts } from "@/app/blog/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturedPackages() {
  const items = posts.slice(0, 6)

  return (
    <section className="py-12 bg-[#2F3B2F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
            Latest Stories
          </h2>
          <p className="text-sm text-[#F2EFED] mt-1">An asymmetric visual journey</p>
        </div>

        {/* compact asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((post, i) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className={`group relative block w-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* 4×3 aspect box */}
              <div className="relative w-full pb-[75%]">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                {/* gradient + title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-3 right-3 font-serif text-white text-base md:text-lg font-semibold line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* view-all button */}
        <div className="text-center mt-8">
          <Button asChild size="sm" className="bg-white text-[#2F3B2F] hover:bg-[#F2EFED]">
            <Link href="/blog">View All Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
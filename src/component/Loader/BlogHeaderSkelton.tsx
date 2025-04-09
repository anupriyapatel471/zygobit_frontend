"use client"
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogHeaderSkelton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left side - Featured blog */}
        <div className="w-full lg:w-2/3">
          <div className="rounded-lg overflow-hidden">
            <Skeleton height={400} />
          </div>
          <div className="mt-4 space-y-2">
            <Skeleton width={100} height={20} /> {/* Category tag */}
            <Skeleton height={30} />              {/* Title */}
            <Skeleton count={2} />                {/* Excerpt */}
            <Skeleton width={80} height={15} />   {/* Date */}
          </div>
        </div>

        {/* Right side - Smaller blog cards */}
        <div className="w-full lg:w-1/3 space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton height={80} width={100} /> {/* Thumbnail */}
              <div className="flex-1 space-y-2">
                <Skeleton width={80} height={15} />  {/* Category tag */}
                <Skeleton height={20} />             {/* Title */}
                <Skeleton count={1} width="90%" />   {/* Excerpt */}
                <Skeleton width={60} height={12} />  {/* Date */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </SkeletonTheme>
  )
}

export default BlogHeaderSkelton

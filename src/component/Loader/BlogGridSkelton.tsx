"use client"
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const BlogGridSkeleton = () => {
  return (
    <div className="container">
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="space-y-4">
        {/* Category filter buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {[1, 2, 3 , 4].map((_, i) => (
            <Skeleton key={i} width={200} height={36} borderRadius={10} />
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="rounded-xl bg-[#141414] p-4 space-y-3 shadow-lg">
              <Skeleton height={200} className="rounded-lg" />
              <Skeleton width={80} height={20} /> {/* Tag */}
              <Skeleton width={100} height={16} /> {/* Date */}
              <Skeleton height={24} /> {/* Title */}
              <Skeleton count={2} /> {/* Description */}
            </div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
    </div>
  )
}

export default BlogGridSkeleton

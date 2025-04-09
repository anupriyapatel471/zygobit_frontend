"use client"
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const MapSkeleton = () => {
  return (
    <>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton  height={600} count={1} />
    </p>
  </SkeletonTheme>
    </>
  )
}

export default MapSkeleton
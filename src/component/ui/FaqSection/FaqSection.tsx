import React from 'react'
import Faq from '../Faq/Faq'

const FaqSection = () => {
  return (
    <>
     <section className="w-full bg-gradient-to-b from-black via-black to-orange-600 mb-14 sm:mb-20 pb-12 sm:pb-20">
        <div className="w-full pt-10 pb-8 sm:pb-14 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            FAQ’s
          </h2>
        </div>
        <div className="w-full mx-auto max-w-4xl  bg-white/5 p-4 sm:p-6">
          <Faq />
        </div>
      </section>
    </>
  )
}

export default FaqSection

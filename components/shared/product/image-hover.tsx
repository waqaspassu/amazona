'use client'

import Image from 'next/image'
import { useState } from 'react'

const ImageHover = ({
  src,
  hoverSrc,
  alt,
}: {
  src: string
  hoverSrc: string
  alt: string
}) => {
  const [isHover, setIsHover] = useState(false)
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let hoverTimeout: any
  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => setIsHover(true), 1000)
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setIsHover(false)
  }
  return (
    <div
      className='relative h-52'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='80vw'
        className={`object-contain transition-opaticy duration-500 ${
          isHover ? 'opacity-0' : 'opacity-100'
        } `}
      />

      <Image
        src={hoverSrc}
        alt={alt}
        fill
        sizes='80vw'
        className={`absolute inset-0 object-contain transition-opaticy duration-500 ${
          isHover ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export default ImageHover

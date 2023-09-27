'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { Subtitle } from '../Subtitle'

import ArrowLeft from '@/assets/arrow-left.svg'
import ArrowRight from '@/assets/arrow-right.svg'
import { Language } from '../Language'

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <section className="py-8 md:py-16 md:max-w-5xl mx-auto px-4">
      <Subtitle subtitle="Projetos" />
      <div className="relative md:max-w-2xl mx-auto">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide grid gap-6">
            <div className="h-80 bg-slate-800 rounded-xl" />
            <div className="grid grid-cols-2 gap-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec aliquam justo.
              </p>
              <div className="flex flex-wrap gap-2">
                <Language code="ReactJS" />
                <Language code="NodeJS" />
                <Language code="NodeJS" />
                <Language code="NodeJS" />
                <Language code="NodeJS" />
                <Language code="NodeJS" />
                <Language code="NodeJS" />
              </div>
            </div>
          </div>
          <div className="keen-slider__slide h-80">2</div>
          <div className="keen-slider__slide h-80">3</div>
        </div>
        {loaded && instanceRef.current && (
          <div className="px-6 md:max-w-2xl">
            <button
              className="absolute top-40 -translate-y-1/2 left-6 h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center disabled:bg-zinc-800"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
              <ArrowLeft />
            </button>

            <button
              className="absolute top-40 -translate-y-1/2 right-6 h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center disabled:bg-zinc-800"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

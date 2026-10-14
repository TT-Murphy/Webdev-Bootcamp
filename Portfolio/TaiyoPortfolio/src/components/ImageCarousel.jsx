import { useState } from 'react'
import carouselImages from '../data/carouselImages'
import './ImageCarousel.css'

function ImageCarousel() {
  // State: the index of the slide currently shown. Changing it re-renders the component.
  const [current, setCurrent] = useState(0)
  const total = carouselImages.length

  // Event handlers: the % wraps around (last -> first, first -> last)
  const goNext = () => setCurrent((current + 1) % total)
  const goPrev = () => setCurrent((current - 1 + total) % total)

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Personal photos">
      <div className="carousel-viewport">
        {/* The track holds all slides side by side; shifting it with translateX shows one slide.
            CSS `transition` on transform makes the movement smooth. */}
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {/* Rendering an array: one slide per object in carouselImages */}
          {carouselImages.map((slide, index) => (
            <figure
              className="carousel-slide"
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}`}
              aria-hidden={index !== current}
            >
              <img src={slide.src} alt={slide.alt} />
              <figcaption>
                <strong>{slide.caption}</strong>
                <span>{slide.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <button className="carousel-arrow prev" onClick={goPrev} aria-label="Previous slide">
          &#8249;
        </button>
        <button className="carousel-arrow next" onClick={goNext} aria-label="Next slide">
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {carouselImages.map((slide, index) => (
          <button
            key={slide.src}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.caption}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel

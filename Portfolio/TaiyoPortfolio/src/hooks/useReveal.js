import { useEffect, useRef, useState } from 'react'

// Custom hook: returns [ref, isVisible].
// Attach `ref` to an element; `isVisible` flips to true once it scrolls into view.
export default function useReveal() {
  const ref = useRef(null) // Points at the DOM element
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Animate only once
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(element)
    return () => observer.disconnect() // Cleanup when the component unmounts
  }, [])

  return [ref, isVisible]
}

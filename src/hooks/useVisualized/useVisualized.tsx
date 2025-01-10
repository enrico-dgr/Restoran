import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function useVisualized() {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const [visualized, setVisualized] = useState(false)

  useEffect(() => {
    if (inView) {
      setVisualized(inView)
    }
  }, [inView])

  return { ref, visualized }
}

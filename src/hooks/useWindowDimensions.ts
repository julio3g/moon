import { useCallback, useEffect, useState } from 'react'

interface WindowDimensions {
  width: number
  height: number
}

export function useWindowDimensions(): WindowDimensions {
  const hasWindow: boolean = typeof window !== 'undefined'

  const getWindowDimensions = useCallback((): WindowDimensions => {
    const width: number = hasWindow ? window.innerWidth : 0
    const height: number = hasWindow ? window.innerHeight : 0
    return { width, height }
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions(),
  )

  useEffect(() => {
    if (hasWindow) {
      const handleResize = (): void =>
        setWindowDimensions(getWindowDimensions())
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow, getWindowDimensions])

  return windowDimensions
}

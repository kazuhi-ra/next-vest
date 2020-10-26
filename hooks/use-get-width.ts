import { useEffect, useState } from 'react'

const getCurrentWidth = () => {
  let result = null
    if (window) {
      result = window.innerWidth
    }
  
  return result
}

const useGetWidth = () => {
  const [current, setCurrent] = useState<number | null>()

  useEffect(() => {
    if (window) setCurrent(window.innerWidth)
    let timeout: NodeJS.Timeout | null
    const onResize = () => {
      // 500msに一度しかresizeイベントのcallbackを実行しないようにする
      if (timeout) return

      const width = getCurrentWidth()
      if (current !== width) {
        setCurrent(width)
      }

      timeout = setTimeout(() => (timeout = null), 50)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return current
}

export default useGetWidth

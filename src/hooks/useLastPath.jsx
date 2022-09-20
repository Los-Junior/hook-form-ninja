import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useLastPath = () => {
  const router = useRouter()
  const [lastPath, setLastPath] = React.useState('')
  useEffect(() => {
    if (router.isReady) {
      const pathLength = router.pathname.split('/').length
      const lastPath = router.pathname.split('/')[pathLength - 1]
      setLastPath(lastPath)
    }
  }, [router.pathname])

  return lastPath
}

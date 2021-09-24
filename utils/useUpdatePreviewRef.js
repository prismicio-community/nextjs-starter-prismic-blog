import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import useGetExitPreviewRoute from './useGetExitPreviewRoute'
import { repoName } from 'prismic-configuration'

function tryAndGetPreviewCookieObject(previewCookie) {
  if (!previewCookie) return null
  const prismic = previewCookie[`${repoName}.prismic.io`]

  return prismic
}

export default function useUpdatePreview(preview, documentId) {
  const router = useRouter()
  const previewExitRoute = useGetExitPreviewRoute()
  useEffect(() => {
    const rawPreviewCookie = Cookies.get('io.prismic.preview')
    const previewCookie = rawPreviewCookie ? JSON.parse(rawPreviewCookie) : null

    const previewCookieObject = tryAndGetPreviewCookieObject(previewCookie)

    const previewCookieRef = previewCookieObject && previewCookieObject.preview
      ? previewCookieObject.preview
      : null

    if (router.isPreview) {
      if (rawPreviewCookie && previewCookieRef) {
        if (preview.activeRef !== previewCookieRef) {
          console.log('RD1')
          return router.push(`/api/preview?token=${previewCookieRef}&documentId=${documentId}`)
        }
      } else {
        console.log('RD2')
        return router.push(previewExitRoute)
      }
    } else if (rawPreviewCookie && previewCookieRef) {
      console.log('RD3')
      return router.push(`/api/preview?token=${previewCookieRef}&documentId=${documentId}`)
    }
    return undefined
  }, [])
}
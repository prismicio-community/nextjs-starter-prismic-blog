import { useRouter } from 'next/router'

export default function useGetExitPreviewRoute() {
  const router = useRouter()
  const defaultPreviewExitUrl = '/api/exit-preview'
  const linkUrl = router.asPath ? `${defaultPreviewExitUrl}?currentUrl=${router.asPath}` : defaultPreviewExitUrl
  return linkUrl
}
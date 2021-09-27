import { useEffect } from 'react'

const useUpdateToolbarDocs = (docQuery, deps) => {
  useEffect(() => {
    docQuery()
  }, deps)
}

export default useUpdateToolbarDocs
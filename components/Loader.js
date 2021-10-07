import React from 'react'
import { loaderStyles } from 'styles'

/**
 * Site loader component
 */
 const Loader = () => (
  <div className="loader">
    <div className="ldsRipple"/>
    <style jsx global>
      {loaderStyles}
    </style>
  </div>
)

export default Loader

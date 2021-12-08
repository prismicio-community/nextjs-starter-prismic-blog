import React from 'react'
import { PrismicText } from '@prismicio/react'
import { headerStyles } from 'styles'

/**
 * Homepage header component
 */
const Header = ({ image, headline, description }) => {
  return (
    <div className="home">
      <div className="blog-avatar" style={{ backgroundImage: `url(${image.url})` }} />
      <h1 className="blog-title">
        <PrismicText field={headline} />
      </h1>
      <p className="blog-description">
        <PrismicText field={description} />
      </p>
      <style jsx global>{headerStyles}</style>
    </div>
  )
}

export default Header

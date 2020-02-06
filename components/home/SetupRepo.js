import React from 'react'

import DefaultLayout from 'layouts'
import { apiEndpoint } from 'prismic-configuration'
import { setupRepoStyles } from 'styles'

/**
 * Setup repo component
 */
const SetupRepo = () => {
  const repoUrl = `${apiEndpoint.replace('.cdn','').slice(0, -6)}documents/`

  return (
    <DefaultLayout>
      <div className='setup-repo'>
        <h1>Good job!</h1>
        <h2>You're halfway done with setting up your Prismic website</h2>
        <h4>Just visit your <a href={repoUrl}>Prismic dashboard</a> and add some content there</h4>
      </div>
      <style jsx global>{setupRepoStyles}</style>
    </DefaultLayout>
  )
}

export default SetupRepo

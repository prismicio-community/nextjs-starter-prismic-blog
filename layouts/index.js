import Meta from 'components/Meta'
import Footer from 'components/Footer'

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <Meta />
    <main>{children}</main>
    <Footer />
  </div>
)

export default DefaultLayout

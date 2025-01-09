import { fetchCrudCollection } from "../../api/crud"
import Footer from "../../components/reusableComponents/footer"
import StickyNavBar from "../../components/reusableComponents/stickyNavBar"
import LazyMasonryGallery from "../../components/galleryComponents/lazyMasonryGallery"
import Header from "../../components/reusableComponents/header"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

const Gallery = async () => {
  const response = await fetchCrudCollection({ endpoint: 'gallery-page' })
  const gallery = response?.at(0)?.gallery

  return (
    <div style={{ background: '#064e3b' }}>
      <StickyNavBar selectedKey={""} />
      <Header
        title='Placeholder'
        supertitle='placeholder'
        backgroundImageUrl='/assets/images/balls-placeholder.png'
      />
      <LazyMasonryGallery gallery={gallery} downloadPath={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}`} />
      <Footer />
    </div>

  )
}

export default Gallery


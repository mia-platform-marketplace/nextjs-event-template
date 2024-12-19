import StickyNavBar from '../../components/reusableComponents/stickyNavBar'
import Footer from '../../components/reusableComponents/footer'
import { fetchCrudCollection } from '../../api/crud'
import SimpleBanner from '../../components/reusableComponents/simpleBanner'
import AboutImpact from '../../components/aboutSectionsComponents/aboutImpact'
import AboutSustainability from '../../components/aboutSectionsComponents/aboutSustainability'
import AboutGallery from '../../components/aboutSectionsComponents/aboutGallery'
import Link from 'next/link'
import NoBackgroundButton from '../../lib/MUIutils/noBackgroundButton'
import Header from '../../components/reusableComponents/header'

const About = async () => {

  var response = await fetchCrudCollection({ endpoint: 'about-page' })
  const gallery = response?.at(0)?.gallery
  response = await fetchCrudCollection({ endpoint: 'home-page', query: '_p=eventDate,eventCity,eventLocation' })
  const homepageConfig = response?.at(0)

  return (
    <>
      <StickyNavBar selectedKey='about' />
      <Header
        title='Placeholder'
        supertitle='placeholder'
        backgroundImageUrl='/assets/images/balls-placeholder.png'
        eventInfo={{
          eventCity: homepageConfig?.eventCity,
          eventDate: homepageConfig?.eventDate,
          eventLocation: homepageConfig?.eventLocation
        }}
      />
      <AboutGallery gallery={gallery} />
      <AboutSustainability />
      <AboutImpact />
      <SimpleBanner
        title='PLACEHOLDER'
        subtitle='placeholder'
        description='Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry s standard 
        dummy text ever since the 1500s,'
        button={
          <Link href={'https://example.com/'} passHref legacyBehavior>
            <NoBackgroundButton darkMode={false} icon='arrow-up-right.svg' component="a" target="_blank">Button text</NoBackgroundButton>
          </Link>
        }
      />
      <Footer />
    </>
  )
}

export default About;
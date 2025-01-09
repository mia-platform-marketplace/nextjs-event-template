import HomeKeywords from '../components/homeSectionsComponents/homeKeywords'
import StickyNavBar from '../components/reusableComponents/stickyNavBar'
import HomeAbout from '../components/homeSectionsComponents/homeAbout'
import HomeHero from '../components/homeSectionsComponents/homeHero'
import HomeNumberReport from '../components/homeSectionsComponents/homeNumberReport'
import HomeEmotionalVideo from '../components/homeSectionsComponents/homeEmotionalVideo'
import HomeGallery from '../components/homeSectionsComponents/homeGallery'
import HomeSpeakers from '../components/homeSectionsComponents/homeSpeakers'
import HomeTracks from '../components/homeSectionsComponents/homeTracks'
import HomeSponsors from '../components/homeSectionsComponents/homeSponsors'
import HomeMediaPartners from '../components/homeSectionsComponents/homeMediaPartners'
import Footer from '../components/reusableComponents/footer'
import getConfig from 'next/config'
import { HomePageType } from '../lib/types'
import MultiLayerLayout from '../components/reusableComponents/multiLayerLayout'
import theme from '../lib/MUIutils/theme'
import DarkBanner from '../components/reusableComponents/darkBanner'
import SponsorshipButton from '../components/reusableComponents/buttons/sponsorshipButton'
import { Button } from '@mui/material'
import IconSvg from '../components/reusableComponents/iconSvg'
import LightBanner from '../components/reusableComponents/lightBanner'

const { serverRuntimeConfig } = getConfig()

const Home = async () => {
  let data: any
  let config: HomePageType = {}

  try {
    data = await fetch(`${serverRuntimeConfig?.CRUD_PATH}/home-page`, { next: { revalidate: 60 } })
    const response = await data.json()
    config = response?.at(0)
  } catch (error) {
    console.error("Error:", error);
  }

  return (
    <>
      <StickyNavBar selectedKey='home' />
      <h1 style={{ display: 'none' }}>PLACEHOLDER</h1>
      <MultiLayerLayout
        containerStyle={{
          width: '100%',
          height: '100%',
          background: theme.palette.gradient[100]
        }}
        secondLayerDiv={
          <></>
        }
      >
        <div style={{ width: '100%' }}>
          <div>
            <HomeHero
              eventCity={config?.eventCity}
              eventLocation={config?.eventLocation}
              eventDate={config?.eventDate}
            />
            <HomeNumberReport
              attendeesNumber={config?.attendeesNumber}
              countriesNumber={config?.countriesNumber}
              speakersNumber={config?.speakersNumber}
              companiesNumber={config?.companiesNumber}
            />
            <HomeKeywords
              keywords={config?.keywords}
            />
          </div>
        </div>
      </MultiLayerLayout >
      <HomeAbout />
      <HomeEmotionalVideo
        teaserVideoUrl={config?.teaserVideoUrl}
        recapVideoUrl={config?.emotionalVideoUrl}
      />
      <HomeGallery
        galleryImage={config?.galleryImage}
      />
      <HomeSpeakers
        speakersHomePage={config?.speakers}
      />
      <HomeTracks
        tracks={config?.tracks}
      />
      <HomeSponsors
        sponsorsHomePage={config?.sponsors}
      />
      <HomeMediaPartners
        partnersHomePage={config?.partners}
      />
      <LightBanner
        supertitle='PLACEHOLDER'
        title='Got insights to Share?'
        description={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknow</>}
        button={<Button variant='contained' color='primary' endIcon={<IconSvg name='arrow-up-right.svg' />}>Action</Button>}
      />
      <DarkBanner
        title='Sponsorship'
        description={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknow</>}
        button={<SponsorshipButton />}
      />
      <Footer />
    </>
  )
}

export default Home

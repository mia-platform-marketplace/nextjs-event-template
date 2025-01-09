import StickyNavBar from '../../components/reusableComponents/stickyNavBar'
import Footer from '../../components/reusableComponents/footer';
import SpeakersSpeakers from '../../components/speakersSectionsComponents/speakersSpeakers';
import { fetchCrudCollection } from '../../api/crud';
import Header from '../../components/reusableComponents/header';
import DarkBanner from '../../components/reusableComponents/darkBanner';
import SponsorshipButton from '../../components/reusableComponents/buttons/sponsorshipButton';
import LightBanner from '../../components/reusableComponents/lightBanner';
import { Button } from '@mui/material';
import IconSvg from '../../components/reusableComponents/iconSvg';


const Speakers = async () => {
  const response = await fetchCrudCollection({ endpoint: 'home-page', query: '_p=eventDate,eventCity,eventLocation' })
  const homepageConfig = response?.at(0)
  const speakers = await fetchCrudCollection({ endpoint: 'speakers', query: '_l=200' })
  const talks = await fetchCrudCollection({ endpoint: 'talks', query: '_l=200' })
  const tracks = await fetchCrudCollection({ endpoint: 'talk-tracks', query: '_l=200' })

  return (
    <>
      <StickyNavBar selectedKey='speakers' />
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
      <SpeakersSpeakers speakers={speakers} talks={talks} tracks={tracks} />
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

export default Speakers;
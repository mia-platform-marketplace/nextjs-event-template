import StickyNavBar from '../../components/reusableComponents/stickyNavBar'
import Footer from '../../components/reusableComponents/footer'
import { SponsorsStyled } from '../../components/styles/sponsorsStyled';
import SponsorsTextSection from '../../components/sponsorsSectionsComponents/sponsorsTextSection';
import { fetchCrudCollection } from '../../api/crud';
import DarkHeader from '../../components/reusableComponents/darkHeader';
import theme from '../../lib/MUIutils/theme';

const BecomeASponsor = async () => {
    var response = await fetchCrudCollection({ endpoint: 'home-page', query: '_p=eventDate,eventCity,eventLocation' })
    const location = response?.at(0)

    response = await fetchCrudCollection({ endpoint: 'sponsors-page' })
    const config = response?.at(0)

    return (
        <SponsorsStyled>
            <h2 style={{ display: 'none' }}>PLACEHOLDER</h2>
            <StickyNavBar selectedKey='become-a-sponsor' />
            <DarkHeader
                supertitle='SPONSOR'
                title={
                    <div>
                        Become a sponsor
                    </div>
                }
                backgroundImageUrl='/assets/images/balls-placeholder.png'
            />
            <div className='sponsors-content-container'>
                <div className='sponsors-text-section'>
                    <SponsorsTextSection location={location} config={config} />
                </div>
                <div className='sponsors-form'>
                    <div style={{ background: theme.palette.grey[25], padding: '25px', width: '100%' }}>
                        Placeholder
                    </div>
                </div>
            </div>
            <Footer />
        </SponsorsStyled>
    )
}

export default BecomeASponsor;
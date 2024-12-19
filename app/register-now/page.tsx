import StickyNavBar from '../../components/reusableComponents/stickyNavBar'
import Footer from '../../components/reusableComponents/footer'
import DarkHeader from '../../components/reusableComponents/darkHeader';
import { RegisterStyled } from '../../components/styles/registerStyles/registerStyled';
import RegisterTextSection from '../../components/registerSectionsComponents/registerTextSection';
import { fetchCrudCollection } from '../../api/crud';
import theme from '../../lib/MUIutils/theme';

const Register = async () => {

    const response = await fetchCrudCollection({ endpoint: 'home-page', query: '_p=eventDate,eventCity,eventLocation' })
    const location = response?.at(0)

    return (
        <RegisterStyled>
            <h2 style={{ display: 'none' }}>PLACEHOLDER</h2>
            <StickyNavBar selectedKey='register' />
            <DarkHeader
                supertitle='REGISTER'
                title={
                    <div>
                        Placeholder
                    </div>
                }
                backgroundImageUrl='/assets/images/balls-placeholder.png'
            />
            <div className='register-content-container'>
                <div className='register-text-section'>
                    <RegisterTextSection location={location} />
                </div>
                <div className='register-form'>
                    <div style={{ background: theme.palette.grey[25], padding: '25px', width: '100%' }}>
                        Placeholder
                    </div>
                </div>
            </div>
            <Footer />
        </RegisterStyled>
    )
}

export default Register;
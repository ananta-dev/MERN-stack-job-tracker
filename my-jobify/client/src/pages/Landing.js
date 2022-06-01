import main from '../assets/images/main.svg';
import LandingPageWrapper from '../assets/wrappers/LandingPageWrapper';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <LandingPageWrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby marfa poutine pickled kickstarter 8-bit
                        drinking vinegar schlitz sriracha next level cloud bread
                        affogato hoodie pinterest post-ironic. Skateboard craft
                        beer unicorn blue bottle brooklyn lyft.{' '}
                    </p>
                    <Link to='/register' className='btn btn-hero'>
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </LandingPageWrapper>
    );
};

export default Landing;

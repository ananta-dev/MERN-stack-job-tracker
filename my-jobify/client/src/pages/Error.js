import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import ErrorPageWrapper from '../assets/wrappers/ErrorPageWrapper';

const Error = () => {
    return (
        <ErrorPageWrapper className='full-page'>
            <div>
                <img src={img} alt='not found' />
                <h3>Ohh! page not found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/'>back home</Link>
            </div>
        </ErrorPageWrapper>
    );
};

export default Error;

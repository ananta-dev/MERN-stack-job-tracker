import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import BigSidebarWrapper from '../assets/wrappers/BigSidebarWrapper';

const BigSidebar = () => {
    const { showSidebar } = useAppContext();
    return (
        <BigSidebarWrapper>
            <div
                className={
                    showSidebar
                        ? 'sidebar-container '
                        : 'sidebar-container show-sidebar'
                }
            >
                <div className='content'>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </BigSidebarWrapper>
    );
};

export default BigSidebar;

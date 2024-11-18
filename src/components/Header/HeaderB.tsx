import Logo from './Partials/Logo';
import Social from '../Social';
import NavLinks from './Partials/NavLinks';
import DetailsBarMobile from './Partials/DetailsBarMobile';
import DetailsBar from './Partials/DetailsBar';

function HeaderB() {
    return <>
        <header id="Header_" className="Header_B mx-auto sticky-top">
            {/* <DetailsBar /> */}
            <div className="container">
                <div id="nav" className="d-flex justify-content-center justify-content-lg-between align-items-center">
                    <Logo />
                    <NavLinks />
                </div>
            </div>
            <DetailsBarMobile />
        </header>
    </>;
}
export default HeaderB;


import OffCanvas from './Partials/OffCanvas';
import Logo from './Partials/Logo';
import Social from '../Social';
import NavLinks from './Partials/NavLinks';
import DetailsBarMobile from './Partials/DetailsBarMobile';

function HeaderA() {
    return <>
        <OffCanvas />
        <header id="Header_" className="Header_ mx-auto sticky-top">
            <div id="nav">
                <div className="container d-flex align-items-center justify-content-center justify-content-lg-between">
                    <Logo />
                </div>
             
                <div id="header-contact" className="text-end d-none d-lg-block">
                    <a className="header-tel" href="tel:@(Model.Location.TelNonDisplay)"><strong><span className="text-secondary">Tel.</span>&nbsp;@(Model.Location.Tel)</strong></a>
                    <Social />
                </div>
            </div>
            <NavLinks />
            <DetailsBarMobile />
        </header>
    </>;
}
export default HeaderA;
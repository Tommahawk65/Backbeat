function HeaderA() {
    return <>
        <header id="Header_" className="Header_B mx-auto sticky-top">
            <div className="container">
                <div id="nav" className="d-flex justify-content-center justify-content-lg-between align-items-center">
                <a className="logo" rel="home" href="/" aria-label="To Homepage">
                    <img src="/src/assets/logo-light.png" alt=" Logo" title=" Logo" height="75" width="100"/>
                </a>
                    <nav className="navbar navbar-expand-lg p-0">
                        <div className="container-fluid p-0">
                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header bg-primary">
                                    <h5 className="offcanvas-title h3" id="offcanvasNavbarLabel">Navigate</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body bg-primary-l justify-content-lg-center text-start text-lg-center">
                                    <ul className="navbar-nav h-100">
                                        <li className="Home nav-item"><a href="/" rel="home" className="nav-link">Home</a></li>
                                        <li className="Finance nav-item"><a href="/finance" className="nav-link">Videos</a></li>
                                        <li className="Warranty nav-item"><a href="/warranty" className="nav-link">Repertoire</a></li>
                                        <li className="Reviews nav-item"><a href="/reviews" className="nav-link">Reviews</a></li>
                                        <li className="AboutUs nav-item"><a href="/about-us" className="nav-link">FAQ's</a></li> 
                                        <li className="ContactUs nav-item"><a href="/contact-us" className="nav-link">Contact<text className="d-lg-none d-xl-inline">&nbsp;Us</text></a></li>
                                        <li className="d-lg-none nav-item mt-auto"><a href="tel:@(Model.Location.TelNonDisplay)" className="nav-link d-flex justify-content-between">Call Us: <strong className="ms-auto">@(Model.Location.Tel)</strong></a></li>
                                        <li className="d-lg-none nav-item text-center">
                                            {/* <div className="nav-link">@Html.Partial("Sections/_Social")</div> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* @Html.Partial("Sections/Header/Partial/_Details-Bar-Mobile") */}
            <div id="details-bar-mobile" className="bg-primary-l py-2 d-lg-none">
                <div className="container-fluid d-flex justify-content-lg-between justify-content-center align-items-center">
                    <div className="d-flex gap-3">
                        
                        <a href="tel:555555555"><i className="fa-solid fa-phone me-2"></i>555555555</a>
            
                        <a href="mailto:test@test.com" className="d-none d-lg-inline"><i className="fa-solid fa-envelope me-2"></i>test@test.com</a>
                        
                    </div>
                    <div className="ms-auto">
                        <div className="toggle-menu d-lg-none d-flex gap-1">
                            
                            <a className="btn btn-outline-primary btn-icon btn-sm" title="Call 555555555" href="tel:555555555"><i className="fa-solid fa-phone"></i></a>
                            
                            <a className="btn btn-secondary-d menu-toggle" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">Menu<i className="d-none d-sm-inline-block fa-solid fa-bars ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>;
}
export default HeaderA;
function NavLinks() {
    return <>
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
                            <li className="Finance nav-item"><a href="/finance" className="nav-link">Finance</a></li>
                            <li className="Warranty nav-item"><a href="/warranty" className="nav-link">Warranty</a></li>
                            <li className="PartExchange nav-item"><a href="/part-exchange" className="nav-link">Part Ex<text className="d-lg-none d-xl-inline">change</text></a></li> *@
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Our Services</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="/part-exchange" className="dropdown-item">Part Exchange</a></li>
                                    <li><a href="/warranty" className="dropdown-item">Warranty</a></li>
                                    <li><a href="/servicing" className="dropdown-item">Servicing &amp; MOT</a></li>
                                </ul>
                            </li>
                            <li className="Reviews nav-item"><a href="/reviews" className="nav-link">Reviews</a></li>
                            <li className="AboutUs nav-item"><a href="/about-us" className="nav-link">About<text className="d-lg-none d-xl-inline">&nbsp;Us</text></a></li> *@
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

    </>;
}
export default NavLinks;
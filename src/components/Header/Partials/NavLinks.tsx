function NavLinks() {
    return <>
        <nav className="navbar navbar-expand-lg p-0">
            <div className="container-fluid p-0">
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header bg-primary">
                        <h5 className="offcanvas-title h3" id="offcanvasNavbarLabel">Navigate</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body bg-primary-l justify-content-lg-center text-start text-lg-center">
                        <ul className="navbar-nav h-100">
                            {/* <link to={"./Dashboard"}>
                                <li className="Home nav-item"><a href="/" rel="home" className="nav-link">Home</a></li>
                            </link> */}
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
    </>;
}
export default NavLinks;
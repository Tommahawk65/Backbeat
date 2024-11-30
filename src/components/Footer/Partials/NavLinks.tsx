import { Link }from 'react-router-dom';

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
                            <li className="Home nav-item">
                                <Link to={"/"} className="nav-link"> 
                                    Home
                                </Link>
                            </li>
                            <li className="Videos nav-item">
                                <Link to={"/Videos"} className="nav-link"> 
                                    Videos
                                </Link>
                            </li>
                            <li className="Repertoire nav-item">
                                <Link to={"/Repertoire"} className="nav-link"> 
                                    Repertoire
                                </Link>
                            </li>
                            <li className="Reviews nav-item">
                                <Link to={"/Reviews"} className="nav-link"> 
                                    Reviews
                                </Link>
                            </li>
                            <li className="Faqs nav-item">
                                <Link to={"/Faqs"} className="nav-link"> 
                                    FAQ's
                                </Link>
                            </li>
                            
                            
                            {/* <li className="ContactUs nav-item"><a href="/contact-us" className="nav-link">Contact<text className="d-lg-none d-xl-inline">&nbsp;Us</text></a></li>
                            <li className="d-lg-none nav-item mt-auto"><a href="tel:@(Model.Location.TelNonDisplay)" className="nav-link d-flex justify-content-between">Call Us: <strong className="ms-auto">@(Model.Location.Tel)</strong></a></li>
                            <li className="d-lg-none nav-item text-center">
                                <div className="nav-link">@Html.Partial("Sections/_Social")</div> 
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>;
}
export default NavLinks;
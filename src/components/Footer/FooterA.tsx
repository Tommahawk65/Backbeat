import OffCanvas from './Partials/OffCanvas';
import Logo from './Partials/Logo';
import Social from '../Social';
import NavLinks from './Partials/NavLinks';
import DetailsBarMobile from './Partials/DetailsBarMobile';

function FooterA() {
    return <>
        <footer id="Footer" className="Footer_A py-4 py-lg-5 bg-primary-d">
            <div className="container">
                <Logo />
                <div className="row g-3">
                    <div className="col-sm-6 col-md-4">
                        <h4 className="h3 text-secondary mb-3">Contact Us</h4>
                        <div className="d-flex flex-column flex-wrap gap-2">
                            
                        </div>
                        <div className="my-4">
                            <div className="social">
                                
                                
                               
                               
                                <a target="_blank"  rel="me noopener" href="@(Model.Recipe.facebookURL)" className="btn btn-icon btn-sm me-2 btn-facebook" aria-label="Follow Us On Facebook"><i className="fa-brands fa-square-facebook fa-lg"></i></a>
                               
                                <a target="_blank"  rel="me noopener" href="@(Model.Recipe.twitterURL)" className="btn btn-icon btn-sm btn-twitter me-2 " aria-label="Follow Us On Twitter"><i className="fa-brands fa-twitter fa-lg"></i></a>
                             
                                
                               
                                <a target="_blank" rel="me noopener" href="@(Model.Recipe.instagramURL)" className="btn btn-icon btn-sm btn-instagram me-2 " aria-label="Follow Us On Instagram"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                
                                <a target="_blank" rel="me noopener" href="@(Model.Recipe.tiktokURL)" className="btn btn-icon btn-sm btn-tiktok me-2 " aria-label="Follow Us On TikTok"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                    <h4 className="h3 text-secondary mb-3">FAQ</h4>
                        <ul className="list-unstyled g-3 row">
                            <li className="col-6 text-truncate"><a href="/" rel="home">Home</a></li>
                            <li className="col-6 text-truncate"><a href="/finance">Finance</a></li>
                            <li className="col-6 text-truncate"><a href="/warranty">Warranty</a></li>
                            <li className="col-6 text-truncate"><a href="/part-exchange">Part Ex<span className="d-inline-block d-md-none d-lg-inline">change</span></a></li>
                            <li className="col-6 text-truncate"><a href="/reviews">Reviews</a></li>
                            <li className="col-6 text-truncate"><a href="/contact-us">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 offset-lg-1 col-lg-3">
                        <h4 className="h3 text-secondary mb-3">Sitemap</h4>
                        <ul className="list-unstyled g-3 row">
                            <li className="col-6 text-truncate"><a href="/" rel="home">Home</a></li>
                            <li className="col-6 text-truncate"><a href="/finance">Finance</a></li>
                            <li className="col-6 text-truncate"><a href="/warranty">Warranty</a></li>
                            <li className="col-6 text-truncate"><a href="/part-exchange">Part Ex<span className="d-inline-block d-md-none d-lg-inline">change</span></a></li>
                            <li className="col-6 text-truncate"><a href="/reviews">Reviews</a></li>
                            <li className="col-6 text-truncate"><a href="/contact-us">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}
export default FooterA;
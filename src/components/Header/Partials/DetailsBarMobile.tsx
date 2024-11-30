function DetailsBarMobile() {
    return <>
        <div id="details-bar-mobile" className="bg-primary-l py-2 d-lg-none">
            <div className="container-fluid d-flex justify-content-lg-between justify-content-center align-items-center">
                <div className="d-flex gap-3">
                    
                    
                    
                </div>
                <div className="ms-auto">
                    <div className="toggle-menu d-lg-none d-flex gap-1">
                        
                        <a className="btn btn-outline-white text-white btn-icon btn-sm" title="Call 555555555" href="tel:555555555"><i className="fa-solid fa-phone"></i></a>
                        
                        <a className="btn btn-secondary-d menu-toggle" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">Menu<i className="d-none d-sm-inline-block fa-solid fa-bars ms-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default DetailsBarMobile;
function DetailsBar() {
    return <>
        <div id="details-bar" className="bg-secondary d-none d-lg-block py-2">
            <div className="container d-flex justify-content-lg-between justify-content-center align-items-center">
                <div className="d-flex gap-3">
                    
                        <a href="tel:@(Model.Location.TelNonDisplay)"><i className="fa-solid fa-phone me-2"></i>@(Model.Location.Tel)</a>
                    
                    
                        <a href="tel:@(Model.Location.MobNonDisplay)"><i className="fa-solid fa-mobile-screen me-2"></i>@(Model.Location.Mob)</a>
                    
                   
                        <a href="mailto:@(Model.Recipe.OverrideFormEmail)" className="d-none d-lg-inline"><i className="fa-solid fa-envelope me-2"></i>@(Model.Recipe.OverrideFormEmail)</a>
                    
                    <a href="@(Model.Recipe.DirectionsLink)" className="d-none d-md-inline me-2"><i className="fa-solid fa-location-dot me-2"></i>@(Model.Location.Address1), @(Model.Location.Town), @(Model.Location.PostCode)</a>
                </div>
                <div className="ms-auto d-none d-lg-block">

                </div>
            </div>
        </div>
    </>;
}
export default DetailsBar;
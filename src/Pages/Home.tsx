import Fixed from '../components/Hero/Fixed';

function Home() {
    return <>

        <Fixed />
        <section id="main" className="py-4 py-lg-5">
            <div className="container">
                <div className="row align-items-center g-3">
                    <div className="col-md-8 col-lg-7">
                        <h2 className="h1 mb-1">Welcome to @(Model.DealerName)</h2>
                        <h3 className="h2 mb-0 text-secondary fw-normal">Quality used cars for sale in @(Model.Location.Town), @(Model.Location.County)</h3>
                        <hr className="sm left border-secondary"></hr>
                        <p>Thank you for visiting @(Model.DealerName), your used car specialist in @(Model.Location.Town), @(Model.Location.County). We pride ourselves on our exceptional customer service and work hard to make your buying experience as simple and pain-free as possible.</p>
                        <p>We stock a variety of used cars that are all maintained and prepared to the highest possible standard to ensure you get a car that is second to none.</p>
                        <p>Feel free to give us a call today on <a href="tel:@(Model.Location.TelNonDisplay)">@(Model.Location.Tel)</a> and we will be more than happy to help you find your perfect car with us.</p>
                        <div className="d-grid gap-2 d-md-block mt-2">
                            <a className="btn btn-secondary" href="@(Model.MakeSearchLink())">Browse Showroom</a>
                            <a className="btn btn-primary d-none d-sm-inline-block" href="/contact-us">Contact us</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-5 offset-xl-1 col-xl-4">
                        <div id="aside">
                            @Html.Partial("Sections/Aside/_Contact")
                            @Html.Partial("Sections/Aside/_Hours")
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}
export default Home;



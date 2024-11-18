import Logo from './Partials/Logo';
import NavLinks from './Partials/NavLinks';
import DetailsBarMobile from './Partials/DetailsBarMobile';

function HeaderA() {
    return <>
        <header id="Header_" className="Header_B mx-auto sticky-top">
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
export default HeaderA;


@Html.Partial("Sections/Header/Partial/_Off-Canvas")

<header id="Header_" class="Header_E mx-auto @if((Model.Recipe.Header_Position == "fixed")) { <text>fixed-top</text> } else if((Model.Recipe.Header_Position == "sticky")) { <text>sticky-top</text> }">
    <div class="container-fluid">
        <div id="nav" class="d-flex gap-2 justify-content-center justify-content-lg-between align-items-center">
            <div class="col-auto">
                @Html.Partial("Sections/Header/Partial/_Logo")
            </div>
            @Html.Partial("Sections/Header/Partial/_Nav-Links")
            <div class="col-auto text-end d-none d-lg-flex flex-column text-center flex-wrap gap-1">
                @if (!string.IsNullOrEmpty( Model.Location.Tel )) {
                    <a href="tel:@(Model.Location.TelNonDisplay)" class="btn btn-primary-d btn-sm" title="Call @(Model.DealerName)"><i class="fa-solid fa-phone me-2 fa-lg"></i>@(Model.Location.Tel)</a>
                }
                @Html.Partial("Sections/_Social")
            </div>
        </div>
    </div>
    @Html.Partial("Sections/Header/Partial/_Details-Bar-Mobile")
</header>
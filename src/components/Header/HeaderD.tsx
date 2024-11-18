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

<header id="Header_" class="Header_D mx-auto @if((Model.Recipe.Header_Position == "fixed")) { <text>fixed-top</text> } else if((Model.Recipe.Header_Position == "sticky")) { <text>sticky-top</text> }">
    <div id="nav">
        <div class="container d-flex align-items-center justify-content-center justify-content-lg-between py-lg-2">
            @Html.Partial("Sections/Header/Partial/_Logo")
            <div id="header-contact" class="d-none d-lg-flex flex-column gap-1 text-end ms-auto me-0 me-lg-3 pe-3 pe-lg-4 border-end border-25 border-secondary">
                @if (!string.IsNullOrEmpty( Model.Location.Tel )) {
                    <a class="header-tel" href="tel:@(Model.Location.TelNonDisplay)"><i class="fa-solid fa-phone text-secondary me-2 fa-sm fa-fw"></i>@(Model.Location.Tel)</a>
                }
                @if (!string.IsNullOrEmpty( Model.Recipe.OverrideFormEmail )) {
                    <a class="header-email" href="mailto:@(Model.Recipe.OverrideFormEmail)"><i class="fa-solid fa-envelope text-secondary me-2 fa-fw"></i>@(Model.Recipe.OverrideFormEmail)</a>
                }
                @Html.Partial("Sections/_Social")
            </div>
            @Html.Partial("Sections/Header/Partial/_Rating")
        </div>
        @Html.Partial("Sections/Header/Partial/_Nav-Links")
    </div>
    @Html.Partial("Sections/Header/Partial/_Details-Bar-Mobile")
</header>

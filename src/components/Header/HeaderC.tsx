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

<header id="Header_" class="Header_C mx-auto @if((Model.Recipe.Header_Position == "fixed")) { <text>fixed-top</text> } else if((Model.Recipe.Header_Position == "sticky")) { <text>sticky-top</text> }">
    <div id="nav">
        <div class="container d-flex gap-1 justify-content-center justify-content-lg-between align-items-center flex-row-reverse flex-lg-row">
            <div class="text-start header-phone d-none d-lg-block header-info">
                @Html.Partial("Sections/Header/Partial/_Rating")
            </div>
            <div class="text-center logo-wrap">
                @Html.Partial("Sections/Header/Partial/_Logo")
            </div>
            <div class="text-end d-none d-lg-flex gap-3 flex-column header-info">
                <div class="d-block">
                    @if (!string.IsNullOrEmpty( Model.Location.Tel )) {
                        <a class="header-tel" href="tel:@(Model.Location.TelNonDisplay)"><i class="fa-solid fa-phone text-secondary me-2 fa-fw"></i>@(Model.Location.Tel)</a>
                    }
                    @if (!string.IsNullOrEmpty( Model.Location.Mob )) {
                       <a class="header-tel border-start border-secondary border-50 ms-2 ps-2" href="tel:@(Model.Location.MobNonDisplay)"><i class="fa-solid fa-mobile-screen text-secondary me-2 fa-fw"></i>@(Model.Location.Mob)</a>
                    }
                </div>
                @if (!string.IsNullOrEmpty( Model.Recipe.OverrideFormEmail )) {
                    <a class="header-email d-block" href="mailto:@(Model.Recipe.OverrideFormEmail)"><i class="fa-solid fa-envelope text-secondary me-2 fa-fw"></i>@(Model.Recipe.OverrideFormEmail)</a>
                }
                @* <div class="d-block"><i class="fa-solid fa-clock text-secondary me-2 fa-fw"></i>Viewings By Appointment Only</div> *@
            </div>
        </div>
        @Html.Partial("Sections/Header/Partial/_Nav-Links")
    </div>
    @Html.Partial("Sections/Header/Partial/_Details-Bar-Mobile")
</header>

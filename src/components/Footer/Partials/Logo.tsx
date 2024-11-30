import LogoImgFooter from'/src/assets/ilogo-full.png';

function Logo() {
    return <>
        <div className="mb-4 text-center">
            <a className="logo" rel="home" href="/" aria-label="To Homepage">
                <img src={LogoImgFooter} alt="@(Model.DealerName) Logo" title="@(Model.DealerName) Logo" height="65" width="200" className="img-fluid "/>
            </a>
        </div>
    </>;
}
export default Logo;
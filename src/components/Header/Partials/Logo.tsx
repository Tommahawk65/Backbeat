import LogoImg from'/src/assets/logo-light.png';

function Logo() {
    return <>
        <a className="logo" rel="home" href="/" aria-label="To Homepage">
            <img src={LogoImg} alt=" Logo" title=" Logo" height="75" width="100"/>
        </a>
    </>;
}
export default Logo;
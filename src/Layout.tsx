import HeaderA from './components/Header/HeaderA';
import HeaderB from './components/Header/HeaderB';
import Fixed from './components/Hero/Fixed';
import { Outlet } from "react-router-dom";

function Layout() {
    return <>
        <HeaderB />
        <Outlet/>
        
        

    </>;
}
export default Layout;



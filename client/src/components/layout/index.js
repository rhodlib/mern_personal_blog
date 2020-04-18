import { h } from "preact";
import Header from "../header";
import Footer from "../footer";
import style from "./style.css";

const Layout = ({children}) => {
    return(
        <>
            <div class={style.layout}>
                <Header/>
                { children }
            </div>
            <Footer/>
        </>     
    )
};

export default Layout;
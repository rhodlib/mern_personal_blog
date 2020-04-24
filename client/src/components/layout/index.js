import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children}) => {
    return(
        <div>
            <div>
                <Header/>
                { children }
            </div>
            <Footer/>
        </div>     
    )
};

export default Layout;
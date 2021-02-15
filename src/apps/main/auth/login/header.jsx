import React from 'react';
import { useLocation } from 'react-router-dom'
function Header(props) {
    const location = useLocation();
    let path=location.pathname;
    let title=path.replace(/\//g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    return(

    )
}
export default Header;
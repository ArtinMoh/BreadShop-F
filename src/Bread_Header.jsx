// Header component

import React from "react";
import BreadShopLogo from './assets/images/BreadShop - Logo.svg';

const BreadHeader = () => {
    return (
        <header>
            <img src={BreadShopLogo} alt="BreadShop" />
            <div></div>
            <ul id="headerItems">
                <li className="headerItems-li">Home</li>
                <li className="headerItems-li">Products</li>
                <li className="headerItems-li">About Us</li>
            </ul>
        </header>
    );
};

export default BreadHeader;
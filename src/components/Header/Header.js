import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = () => {
        return (
            <>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </>
        )
    }

    return (
        <div className="Header">
            <div className="drawer drawer-end">
                <input id="cleanedin-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-100">
                        <div className="flex-1 px-2 mx-2 font-semibold text-xl">
                            {/* <Link to="/">
                                Cleaned It.
                            </Link> */}
                            <a >
                                Cleaned It.
                            </a>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="cleanedin-drawer" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {
                                    menuItems()
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Page Content Content */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="cleanedin-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {
                            menuItems()
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Header;
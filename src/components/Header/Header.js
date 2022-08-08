import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    const menuItems = () => {
        return (
            <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </>
        )
    }

    return (
        <div className="Header">
            <div className="drawer drawer-end">
                <input id="cleanedin-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-100 px-20 fixed top-0 z-20">
                        <div className="flex-1 px-2 mx-2 font-semibold text-xl">
                            <Link to="/">
                                Cleaned It.
                            </Link>
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
                    {
                        children
                    }
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
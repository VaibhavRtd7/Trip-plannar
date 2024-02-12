import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
// import { useState } from "react";

export default function Header() {

  return (
    <>
    <header
    className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-10 w-auto rounded-full" src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616554.jpg?size=626&ext=jpg&ga=GA1.1.1125652756.1707758693&semt=ais" alt="travel-logo" />
                    <p className="font-serif"> Wander Lust</p>
                </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <Link to='/'
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">HOME</Link>
                <Link to='/destinations' className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">DESTINATION</Link>

                <Link to='/about' className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">ABOUT US</Link>
            </div>
            <div className="flex items-center justify-end gap-3">
                <Link to="/auth" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >Login</Link>
            </div>
        </div>
    </div>
  </header>
      <Outlet />
      <Footer />
    </>
  );
}

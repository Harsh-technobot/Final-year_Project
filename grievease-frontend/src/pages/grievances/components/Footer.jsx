import React from "react";

const Footer = () => {
return (
    <footer className="relative w-full  h-7 top-8 left-0 border-0 border-none">
        <div className="w-full bg-white h-[92px] border-0 border-none lg:flex items-center justify-between px-4">
            <div className="flex items-center gap-2.5">
                <p className="font-normal text-white text-4xl">
                    <span className="text-black">Griev</span>
                    <span className="font-bold text-black">ease</span>
                </p>
            </div>
            <div className="lg:flex gap-4">
                <div className="font-normal text-gray-600 text-base">About</div>
                <div className="font-normal text-gray-600 text-base">Privacy Policy</div>
                <div className="font-normal text-gray-600 text-base">Terms of Service</div>
                <div className="font-normal text-gray-600 text-base">Contact</div>
            </div>
        </div>
    </footer>
);
};

export default Footer;
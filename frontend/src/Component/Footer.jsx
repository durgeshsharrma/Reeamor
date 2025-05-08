import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#856fbb] text-[#212529] min-h-[70vh] pt-16 px-6 pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">

                {/* Column 1: Logo and Social */}
                <div>
                    <h1 className="text-3xl font-bold mb-6">REEAMOR</h1>
                    <p className="text-sm mb-6 leading-relaxed">
                        Best rent-a-friend platform. Find meaningful connections with people who truly care.
                    </p>
                    <h2 className="font-semibold mb-3">Get the app:</h2>
                    <div className="flex space-x-3 mb-6">
                        <div className="w-28 h-9 bg-gray-300 rounded text-center text-sm flex items-center justify-center">App Store</div>
                        <div className="w-28 h-9 bg-gray-300 rounded text-center text-sm flex items-center justify-center">Google Play</div>
                    </div>
                    <h2 className="font-semibold mb-3">Follow us:</h2>
                    <div className="flex space-x-4">
                        <span className="w-9 h-9 bg-gray-400 rounded-full"></span>
                        <span className="w-9 h-9 bg-gray-400 rounded-full"></span>
                        <span className="w-9 h-9 bg-gray-400 rounded-full"></span>
                    </div>
                </div>

                {/* Column 2: Explore */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Explore</h3>
                    <ul className="space-y-3 text-sm">
                        <li>About Us</li>
                        <li>Features</li>
                        <li>Benefits</li>
                        <li>Success Stories</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Column 3: Benefits */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Benefits</h3>
                    <ul className="space-y-3 text-sm">
                        <li>Companionship</li>
                        <li>Connection</li>
                        <li>Support</li>
                        <li>Moments</li>
                        <li>Inclusivity</li>
                    </ul>
                </div>

                {/* Column 4: Features + Terms */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Features</h3>
                    <ul className="space-y-3 text-sm mb-8">
                        <li>Easy Signup</li>
                        <li>Custom Profiles</li>
                        <li>Secure Payments</li>
                    </ul>
                    <h3 className="text-lg font-semibold mb-3">Terms & Conditions</h3>
                    <p className="text-sm leading-relaxed">
                        Review our policies and guidelines to ensure a safe and trustworthy experience.
                    </p>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-16 text-center text-sm text-gray-500 border-t pt-6">
                © 2020 Reeamor. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

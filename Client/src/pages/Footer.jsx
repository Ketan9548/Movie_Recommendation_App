import React from 'react';

// You can use an icon library like `react-icons` for a cleaner implementation
const SocialIcon = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-gray-300">
        <span className="sr-only">{children.props.name}</span>
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info Section */}
                    <div className="space-y-4">
                        <h2 className="text-white font-bold text-xl">YourLogo</h2>
                        <p className="text-gray-400">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <div className="flex space-x-6">
                            <SocialIcon href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" name="Facebook"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" name="Twitter"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.848-.76-.024-1.473-.233-2.11-.583v.06c0 2.254 1.603 4.135 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.592-.028-.875-.082.593 1.844 2.313 3.186 4.354 3.224-1.592 1.248-3.6 1.99-5.786 1.99-.377 0-.748-.022-1.112-.065 2.058 1.32 4.506 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.604.91-.658 1.7-1.474 2.323-2.41z" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" name="GitHub"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="md:col-start-2 lg:col-start-2">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="/marketing" className="text-base hover:text-white">Marketing</a></li>
                            <li><a href="/analytics" className="text-base hover:text-white">Analytics</a></li>
                            <li><a href="/commerce" className="text-base hover:text-white">Commerce</a></li>
                            <li><a href="/insights" className="text-base hover:text-white">Insights</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="/pricing" className="text-base hover:text-white">Pricing</a></li>
                            <li><a href="/docs" className="text-base hover:text-white">Documentation</a></li>
                            <li><a href="/guides" className="text-base hover:text-white">Guides</a></li>
                            <li><a href="/api-status" className="text-base hover:text-white">API Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="/about" className="text-base hover:text-white">About</a></li>
                            <li><a href="/blog" className="text-base hover:text-white">Blog</a></li>
                            <li><a href="/jobs" className="text-base hover:text-white">Jobs</a></li>
                            <li><a href="/press" className="text-base hover:text-white">Press</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-base text-gray-400">&copy; 2025 YourLogo, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
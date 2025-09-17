// src/components/layout/Header.jsx

import React, { useState } from 'react';
// Renomeamos o Link do Router para não conflitar com a tag <a>
import { Link as RouterLink } from 'react-router-dom';
import logoSvg from '../../assets/logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 1. ATUALIZAMOS OS DESTINOS (href) para serem âncoras (#)
    const allLinks = [
        { name: 'Projetos', href: '#projetos', showOnDesktop: true },
        { name: 'Experiência', href: '#experiencia', showOnDesktop: true },
        { name: 'Educação', href: '#educacao', showOnDesktop: true },
        { name: 'Sobre mim', href: '#sobre-mim', showOnDesktop: true },
        { name: 'Contato', href: '#contato', showOnDesktop: true },
        { name: 'IArts', href: '/iarts', showOnDesktop: false, isSeparator: true },
        { name: 'Música', href: '/musica', showOnDesktop: false },
    ];

    const socialLinks = [
      { name: 'Figma', href: 'https://www.figma.com/@e110b1fc_9e93_4', svg: <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.27597 16.7241C0.27597 14.9149 1.74269 13.4482 3.55195 13.4482H6.82792V16.7241C6.82792 18.5333 5.3612 20 3.55195 20C1.74269 20 0.27597 18.5333 0.27597 16.7241Z" fill="#24CB71"></path><path d="M6.82745 0V6.55175H10.2759C12.1803 6.55175 13.7242 5.08508 13.7242 3.27588C13.7242 1.46667 12.1803 0 10.2759 0H6.82745Z" fill="#FF7237"></path><path d="M10.2759 13.4483C12.1803 13.4483 13.7242 11.9045 13.7242 10C13.7242 8.0956 12.1803 6.55175 10.2759 6.55175C8.37135 6.55175 6.82745 8.0956 6.82745 10C6.82745 11.9045 8.37135 13.4483 10.2759 13.4483Z" fill="#00B6FF"></path><path d="M0.27597 3.27588C0.27597 5.08508 1.74269 6.55175 3.55195 6.55175H6.82745V0H3.55195C1.74269 0 0.27597 1.46667 0.27597 3.27588Z" fill="#FF3737"></path><path d="M0.27597 10C0.27597 11.9045 1.74269 13.4482 3.55195 13.4482H6.82792L6.82745 6.55175H3.55195C1.74269 6.55175 0.27597 8.09562 0.27597 10Z" fill="#874FFF"></path></svg>, bgColor: 'bg-[#1E1E1E]' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gcarmo/', svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4375 0H1.5625C0.699219 0 0 0.699219 0 1.5625V18.4375C0 19.3008 0.699219 20 1.5625 20H18.4375C19.3008 20 20 19.3008 20 18.4375V1.5625C20 0.699219 19.3008 0 18.4375 0ZM7.20312 14.1836H5.25391V7.94531H7.20312V14.1836ZM6.17578 7.16406H6.16016C5.45312 7.16406 4.99609 6.6875 4.99609 6.08203C4.99609 5.46484 5.46875 5 6.1875 5C6.90625 5 7.34766 5.46484 7.36328 6.08203C7.36719 6.68359 6.91016 7.16406 6.17578 7.16406ZM15 14.1836H12.7891V10.957C12.7891 10.1133 12.4453 9.53516 11.6836 9.53516C11.1016 9.53516 10.7773 9.92578 10.6289 10.3008C10.5742 10.4336 10.582 10.6211 10.582 10.8125V14.1836H8.39062C8.39062 14.1836 8.41797 8.46484 8.39062 7.94531H10.582V8.92578C10.7109 8.49609 11.4102 7.88672 12.5273 7.88672C13.9141 7.88672 15 8.78516 15 10.7148V14.1836Z" fill="white"/></svg>, bgColor: 'bg-[#0077B5]' },
      { name: 'WhatsApp', href: 'https://wa.me/5511978478468', svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 2.91002C16.1331 1.98413 15.0411 1.24999 13.8376 0.750386C12.634 0.250782 11.3431 -0.00429369 10.04 2.33776e-05C4.58005 2.33776e-05 0.130049 4.45002 0.130049 9.91002C0.130049 11.66 0.590049 13.36 1.45005 14.86L0.0500488 20L5.30005 18.62C6.75005 19.41 8.38005 19.83 10.04 19.83C15.5 19.83 19.9501 15.38 19.9501 9.92002C19.9501 7.27002 18.92 4.78002 17.05 2.91002ZM10.04 18.15C8.56005 18.15 7.11005 17.75 5.84005 17L5.54005 16.82L2.42005 17.64L3.25005 14.6L3.05005 14.29C2.2276 12.9771 1.79097 11.4593 1.79005 9.91002C1.79005 5.37002 5.49005 1.67002 10.03 1.67002C12.23 1.67002 14.3 2.53002 15.85 4.09002C16.6177 4.85389 17.226 5.76257 17.6397 6.76335C18.0534 7.76414 18.2642 8.83711 18.26 9.92002C18.28 14.46 14.58 18.15 10.04 18.15ZM14.56 11.99C14.31 11.87 13.09 11.27 12.87 11.18C12.64 11.1 12.48 11.06 12.31 11.3C12.14 11.55 11.67 12.11 11.53 12.27C11.39 12.44 11.24 12.46 10.99 12.33C10.74 12.21 9.94005 11.94 9.00005 11.1C8.26005 10.44 7.77005 9.63002 7.62005 9.38002C7.48005 9.13002 7.60005 9.00002 7.73005 8.87002C7.84005 8.76002 7.98005 8.58002 8.10005 8.44002C8.22005 8.30002 8.27005 8.19002 8.35005 8.03002C8.43005 7.86002 8.39005 7.72002 8.33005 7.60002C8.27005 7.48002 7.77005 6.26002 7.57005 5.76002C7.37005 5.28002 7.16005 5.34002 7.01005 5.33002H6.53005C6.36005 5.33002 6.10005 5.39002 5.87005 5.64002C5.65005 5.89002 5.01005 6.49002 5.01005 7.71002C5.01005 8.93002 5.90005 10.11 6.02005 10.27C6.14005 10.44 7.77005 12.94 10.25 14.01C10.84 14.27 11.3 14.42 11.66 14.53C12.25 14.72 12.79 14.69 13.22 14.63C13.7 14.56 14.69 14.03 14.89 13.45C15.1 12.87 15.1 12.38 15.03 12.27C14.96 12.16 14.81 12.11 14.56 11.99Z" fill="#FAFAFA"/></svg>, bgColor: 'bg-[#25D366]' },
      { name: 'GitHub', href: 'https://github.com/Guigga', svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.0083 0C4.47396 0 0 4.4661 0 9.99127C0 14.4078 2.86662 18.1464 6.84338 19.4695C7.34058 19.569 7.5227 19.2546 7.5227 18.9901C7.5227 18.7584 7.50631 17.9645 7.50631 17.1372C4.72225 17.7328 4.14249 15.9462 4.14249 15.9462C3.69508 14.7883 3.03215 14.4907 3.03215 14.4907C2.12092 13.8786 3.09852 13.8786 3.09852 13.8786C4.1093 13.9448 4.63969 14.9042 4.63969 14.9042C5.53432 16.4259 6.97592 15.9959 7.55588 15.7312C7.63865 15.0861 7.90394 14.6395 8.18563 14.3914C5.96514 14.1598 3.62891 13.2996 3.62891 9.46183C3.62891 8.37008 4.02634 7.47686 4.65608 6.78218C4.55672 6.5341 4.20866 5.50832 4.75564 4.1354C4.75564 4.1354 5.60069 3.87069 7.5061 5.16098C8.32188 4.94228 9.16317 4.83102 10.0083 4.83008C10.8533 4.83008 11.7148 4.946 12.5102 5.16098C14.4159 3.87069 15.2609 4.1354 15.2609 4.1354C15.8079 5.50832 15.4596 6.5341 15.3603 6.78218C16.0066 7.47686 16.3876 8.37008 16.3876 9.46183C16.3876 13.2996 14.0514 14.1431 11.8143 14.3914C12.179 14.7056 12.4936 15.3011 12.4936 16.244C12.4936 17.5838 12.4773 18.6592 12.4773 18.9898C12.4773 19.2546 12.6596 19.569 13.1566 19.4697C17.1333 18.1462 20 14.4078 20 9.99127C20.0163 4.4661 15.526 0 10.0083 0Z" fill="white"/></svg>, bgColor: 'bg-[#24292F]' },
    ];

    return (
        <div className="relative p-4">
            <header className="flex items-center justify-between w-full mx-auto backdrop-blur-sm border border-[#E7E7E7] rounded-[20px] h-[60px] pl-5 shadow-sm">
                
                <div className="flex-shrink-0">
                    <RouterLink to="/">
                        <img src={logoSvg} alt="Logo Guilherme Carmo" className="h-4 w-auto" />
                    </RouterLink>
                </div>

                <nav className="hidden lg:flex items-center space-x-6">
                    {allLinks
                        .filter(link => link.showOnDesktop)
                        .map((link) => (
                            // 2. Usando <a> para links de âncora
                            <a key={link.name} href={link.href} className="text-[#5B6270] text-base font-semibold hover:text-[#27527B] transition-colors">
                                {link.name}
                            </a>
                    ))}
                </nav>
                
                <div className="flex items-center h-full">
                    <div className="hidden md:flex items-center space-x-3 mx-4">
                        {socialLinks.map(social => (
                             <a 
                                key={social.name} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`flex items-center justify-center w-10 h-10 ${social.bgColor} rounded-full p-2 transition-transform hover:scale-110`}
                            >
                                {social.svg}
                            </a>
                        ))}
                    </div>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="group flex items-center justify-center w-[60px] h-full bg-[#27527B] hover:bg-[#356491] rounded-r-[18px] lg:rounded-[20px] transition-all duration-300">
                        <svg className="block group-hover:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H22M2 8.66667H16M2 15.3333H18M2 22H14" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
                        <svg className="hidden group-hover:block" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H26M2 10H18.8M2 18H21.2M2 26H16.4" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <div className="absolute top-full right-4 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
                    <div className="p-2">
                        {allLinks
                            .filter(link => link.showOnDesktop)
                            .map(link => (
                                // 3. Usando <a> aqui também
                                <a 
                                    key={link.name}
                                    href={link.href} 
                                    className="block lg:hidden px-4 py-2 text-base text-[#5B6270] font-semibold rounded-lg hover:bg-gray-100 hover:text-[#27527B]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))
                        }

                        {allLinks
                            .filter(link => !link.showOnDesktop)
                            .map(link => (
                                <React.Fragment key={link.name}>
                                    {link.isSeparator && <hr className="my-2 border-gray-200"/>}
                                    {/* Para estes, podemos usar RouterLink se eles forem para páginas diferentes */}
                                    <RouterLink
                                        to={link.href} 
                                        className="block px-4 py-2 text-base text-[#5B6270] font-semibold rounded-lg hover:bg-gray-100 hover:text-[#27527B]"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </RouterLink>
                                </React.Fragment>
                            ))
                        }

                        <hr className="my-2 border-gray-200 md:hidden" />
                        {socialLinks.map(social => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block md:hidden px-4 py-2 text-base text-[#5B6270] font-semibold rounded-lg hover:bg-gray-100 hover:text-[#27527B]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
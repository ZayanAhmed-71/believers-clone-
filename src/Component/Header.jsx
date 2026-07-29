import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const HeaderMenuClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className='bg-black pb-3'>
            <div className='max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-6 pt-2'>
                {/* Left side */}
                <div className='flex items-center'>
                    <span>
                        <svg
                            className="text-[#E3A13E] blinking-text"
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99377 10.1461C9.39262 10.1461 10.5266 9.0283 10.5266 7.64946C10.5266 6.27061 9.39262 5.15283 7.99377 5.15283C6.59493 5.15283 5.46094 6.27061 5.46094 7.64946C5.46094 9.0283 6.59493 10.1461 7.99377 10.1461Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M1.19707 6.1933C2.79633 -0.736432 13.2118 -0.72843 14.803 6.2013C15.7365 10.2663 13.1712 13.7072 10.9225 15.8357C9.29079 17.3881 6.70924 17.3881 5.06939 15.8357C2.8288 13.7072 0.263493 10.2583 1.19707 6.1933Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </span>
                    <h3 className='text-white ml-1.5 text-sm font-medium blinking-text'>
                        STORE LOCATIONS
                    </h3>
                </div>

                {/* Right side - Settings dropdown */}
                <div className='relative'>
                    <button
                        className='flex items-center gap-1 text-white text-sm font-medium'
                        onClick={HeaderMenuClick}
                    >
                        Settings
                        <ChevronDown size={16} className={`transition-transform ${showMenu ? 'rotate-180' : ''}`} />
                    </button>

                    {showMenu && (
                        <div className='absolute right-0 mt-2 flex flex-col bg-[#0d1420] border border-gray-700 rounded-md overflow-hidden w-32 shadow-lg z-10'>
                            <button className='text-white text-sm px-3 py-2 text-left hover:bg-gray-800'>
                                Login
                            </button>
                            <button className='text-white text-sm px-3 py-2 text-left hover:bg-gray-800'>
                                Sign Up
                            </button>
                            <button className='text-white text-sm px-3 py-2 text-left hover:bg-gray-800'>
                                Track Order
                            </button>
                            <button className='text-white text-sm px-3 py-2 text-left hover:bg-gray-800'>
                                Join As Affiliate
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
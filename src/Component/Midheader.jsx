import { useState } from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';

function TopHeader({ cartCount = 0 }) {
    const [query, setQuery] = useState('');

    const SearchInputChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className='max-w-screen-2xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-6 pt-2'>

            {/* Left side - Logo */}
            <a href="/">
                <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
            </a>

            {/* Middle - Search */}
            <div className='flex-1 flex max-w-2xl'>
                <input
                    type="text"
                    value={query}
                    onChange={SearchInputChange}
                    placeholder="Search for Products..."
                    className='w-full border border-black rounded-l-md px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black'
                />
                <button
                    type="button"
                    className='bg-black px-5 rounded-r-md flex items-center justify-center hover:bg-gray-800 transition-colors'
                >
                    <Search size={18} className="text-white" />
                </button>
            </div>

            {/* Right side - Account */}
            <button type="button" className='flex items-center gap-2 shrink-0'>
                <span className='w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center'>
                    <User size={18} className="text-gray-500" />
                </span>
                <span className='text-left text-sm leading-tight'>
                    <p className='text-gray-500'>Sign In</p>
                    <p className='font-semibold text-gray-900'>Your Account</p>
                </span>
            </button>

            {/* Right side - Cart */}
            <button type="button" className='relative shrink-0'>
                <ShoppingBag size={24} className="text-gray-900" />
                <span className='absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center'>
                    {cartCount}
                </span>
            </button>

        </div>
    );
}

export default TopHeader;
import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const categories = [
    { name: 'Panjabi', hasDropdown: true },
    { name: 'Thobe', hasDropdown: true },
    { name: 'Shirt', hasDropdown: true },
    { name: 'T-shirt', hasDropdown: true },
    { name: 'Polo Shirt', hasDropdown: true },
    { name: 'Pant & Trouser', hasDropdown: true },
    { name: "Women's Clothing", hasDropdown: true },
    { name: 'Attar', hasDropdown: true },
    { name: 'Perfumes', hasDropdown: true },
    { name: 'Gadgets', hasDropdown: true },
    { name: 'Watch', hasDropdown: false },
    { name: 'Sneakers', hasDropdown: true },
    { name: 'Waistcoat', hasDropdown: false },
    { name: 'Honey', hasDropdown: false },
    { name: 'Tupi', hasDropdown: false },
    { name: 'Combo Offers', hasDropdown: true },
    { name: 'FLASH SALE - 26 🔥🔥', hasDropdown: true },
];

export default function CategoryNav({ hotline = '09638090000' }) {
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <div className='border-t border-t-gray-200 border-b border-b-gray-200 mt-4 mb-4 shadow-md'>


            <div className='max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-6 pt-4 pb-4 '>
                <nav className="flex items-center gap-12 flex-wrap text-7xl font-bold">
                    {categories.map((cat) => (
                        <div key={cat.name} className="relative">
                            <button
                                type="button"
                                onClick={() => cat.hasDropdown && setOpenMenu(openMenu === cat.name ? null : cat.name)}
                                className="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-gray-500 transition-colors whitespace-nowrap"
                            >
                                {cat.name}
                                {cat.hasDropdown && (
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform ${openMenu === cat.name ? 'rotate-180' : ''}`}
                                    />
                                )}
                            </button>

                            {cat.hasDropdown && openMenu === cat.name && (
                                <div className="absolute left-0 mt-2 flex flex-col bg-white border border-gray-200 rounded-md shadow-lg w-40 z-20">
                                    <a href="#" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        All {cat.name}
                                    </a>
                                    <a href="#" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        New Arrivals
                                    </a>
                                    <a href="#" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Best Sellers
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center gap-2 shrink-0 pl-6">
                    <Phone size={18} className="text-blue-500" />
                    <span className="text-sm leading-tight">
                        <p className="text-gray-500">Hotline:</p>
                        <p className="font-semibold text-gray-900">{hotline}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}
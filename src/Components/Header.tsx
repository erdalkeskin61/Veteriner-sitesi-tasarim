import { Heart, Menu, X } from "lucide-react"
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigation = [
        {
            name: "Home", href: "#"
        },
        {
            name: "Hizmetler", href: "/services"
        },
        {
            name: "Hakkımızda", href: "/about"
        },

        {
            name: "İletişim", href: "/contact"
        }

    ]

    return (

        <header className="bg-white shadow-lg sticky top-0 z-50">

            {/* max-w-7xl:Max Tablet boyutunda olsun */}
            {/*mx-auto: Yatayda (x) ortalamayı sağlar*/}
            {/*
            px-4: Telefonlar için
            sm:px-6 : Küçük tabletler için
            lg:px-8 : Desktoplar için için
            
            */}
            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    <a href="#" className="flex items-center gap-3">

                        <div className="bg-orange-500 rounded-full p-3 shadow-lg">
                            <Heart color="white" />

                        </div>
                        <span className="text-2xl">Vet</span>

                    </a>

                    {/*Desktop Navigation*/}
                    {/* flex gap-3 felanda verebilirdik*/}

                    {/* hidden:Telefon ve iPad Mini gibi küçük ekranlarda gizlenmesini sağlar*/}
                    {/* md:flex: Medium boyut ve üzeri ekranlarda flex olmasını sağlar*/}
                    {/* space-x-8 : Yatayda (x) 8 birim boşluk bırakır*/}
                    <nav className="space-x-8 hidden md:flex">
                        {navigation.map(item =>
                            <a key={item.href} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-700 hover:text-orange-500 hover:bg-orange-50">{item.name}</a>
                        )}


                    </nav>



                    {/*Burger Button*/}
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-orange-50 curspor-pointer md:hidden">

                        {isOpen ? <X /> : <Menu />}
                    </button>



                </div>

                {/*Mobile Navigation*/}
                {/*TODO:Gizle*/}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 py-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                            {navigation.map(item =>
                                <a key={item.href} href={item.href} className="grid px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-700 hover:text-orange-500 hover:bg-orange-50">{item.name}</a>
                            )}


                        </div>
                    </div>
                )}

            </div>
        </header>
    )
}

export default Header
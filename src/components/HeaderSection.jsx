import logo from '../public/images/logo.svg'

const HeaderSection = () => {
    return <header className="flex items-center justify-between pl-8 pr-8 pt-12 md:pl-16 md:pt-16 md:pr-16 relative">
        <div>
            <img className="w-28" src={logo} alt="logo-image" />
        </div>
        
        <nav>
            <ul className="flex gap-3 md:gap-6 text-white text-xl md:text-[1rem] ">
                <li className="hover:underline hover:scale-110 duration-200 ease-in-out cursor-pointer">
                    Features
                </li>
                <li className="hover:underline hover:scale-110 duration-200 ease-in-out cursor-pointer">
                    Team
                </li>
                <li className="hover:underline hover:scale-110 duration-200 ease-in-out cursor-pointer">
                    Sign In
                </li>
            </ul>
        </nav>
    </header>
}

export default HeaderSection;
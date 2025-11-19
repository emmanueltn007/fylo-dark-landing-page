const HeaderSection = () => {
    return <header className="flex items-center justify-between p-4">
        <div>
            <img src="../public/images/logo.svg" alt="logo-image" />
        </div>
        
        <nav>
            <ul className="flex gap-4 text-white text-xl md:text-[1rem]">
                <li>
                    Features
                </li>
                <li>
                    Team
                </li>
                <li>
                    Sign In
                </li>
            </ul>
        </nav>
    </header>
}

export default HeaderSection;
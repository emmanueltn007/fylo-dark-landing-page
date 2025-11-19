const FooterSection = () => {
    return <footer className="flex flex-col gap-4 text-[hsl(0,0%,82%)] bg-[hsl(216,53%,9%)] pl-10 pr-10 pb-10 pt-60">
        <div>
            <img src="../public/images/logo.svg" alt="logo-image" />
        </div>
        <nav className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-8">
            <div className="flex gap-2">
                <img className="w-5 h-5" src="../public/images/icon-location.svg" alt="location-icon" />
                <p className="text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                    doloremque sapiente maiores perferendis unde tempora maxime, ex 
                    recusandae cum quis, delectus placeat officia iusto. Ipsum neque
                    quod aspernatur sint praesentium!
                </p>
            </div>
            <div className="grid grid-rows-2 gap-4 text-[14px]">
                <div className="flex gap-2">
                    <img className="w-5 h-5" src="../public/images/icon-phone.svg" alt="phone-icon" />
                    <p>
                        +1-543-123-4567
                    </p>
                </div>
                <div className="flex gap-2">
                    <img className="w-5 h-5" src="../public/images/icon-email.svg" alt="email-icon" />
                    <p>
                        example@fylo.com
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
                <span className="cursor-pointer hover:text-white hover:underline decoration-2">
                    About Us
                </span>
                <span className="cursor-pointer hover:text-white hover:underline decoration-2">
                    Jobs
                </span>
                <span className="cursor-pointer hover:text-white hover:underline decoration-2">
                    Press
                </span>
                <span className="cursor-pointer hover:text-white hover:underline decoration-2">
                    Blog
                </span>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
                <span className="cursor-pointer hover:text-white hover:underline decoration-2">
                    Contact Us
                </span>
                <span className="cursor-pointer hover:text-white hover:underline decoration-2">
                    Terms
                </span>
                <span className="cursor-pointer hover:text-white hover:underline decoration-2">
                    Privacy
                </span>
            </div>
            <div className="flex justify-center gap-8 md:gap-0 md:justify-between">
                <a href="#">
                    <img className="w-8 text-red-400" src="../public/images/icons8-facebook-50.png" alt="facebook-icon" />
                </a>
                <a href="#">
                    <img className="w-8" src="../public/images/icons8-twitter-50.png" alt="twitter-icon" />
                </a>
                <a href="#">
                    <img className="w-8" src="../public/images/icons8-instagram-50.png" alt="instagram-icon" />
                </a>
            </div>
        </nav>
    </footer>
}

export default FooterSection;
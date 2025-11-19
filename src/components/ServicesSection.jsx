const ServicesSection = () => {
    return <section className="text-white text-center flex flex-col gap-16
                                md:grid md:grid-cols-2 md:gap-8 pl-16 pr-16 relative">
        <div className="flex flex-col items-center">
            <img className="w-16" src="../public/images/icon-access-anywhere.svg" alt="access-anywhere-icon" />
            <h4 className="font-bold">
                Access your files anywhere
            </h4>
            <p>
                The ability to use a smartphone, tablet, or computer to access your account
                means your files follow you everwhere.
            </p>
        </div>
        <div className="flex flex-col items-center">
            <img className="w-12" src="../public/images/icon-security.svg" alt="security-icon" />
            <h4 className="font-bold">
                Security you can trust
            </h4>
            <p>
                2-factor authentication and user-controlled encryption are just a couple
                of the security features we allow to help secure your files.
            </p>
        </div>
        <div className="flex flex-col items-center">
            <img className="w-16" src="../public/images/icon-collaboration.svg" alt="collaboration-icon" />
            <h4 className="font-bold">
                Real-time collaboration
            </h4>
            <p>
                Securely share files and folders with friends, family and colleagues for live collaboration.
                No email attachments required.
            </p>
        </div>
        <div className="flex flex-col items-center">
            <img className="w-19" src="../public/images/icon-any-file.svg" alt="any-file-icon" />
            <h4 className="font-bold">
                Store any type of file
            </h4>
            <p>
                Whether you're sharing holidays photos or work documents. Fylo has you covered allowing for allow
                file types to be securely stored and shared.
            </p>
        </div>
    </section>
}

export default ServicesSection;
const HowFyloWorks = () => {
    return <section className="text-white md:grid md:grid-cols-2">
        <div>
            <img className="w-[600px]" src="../public/images/illustration-stay-productive.png" alt="stay-productive-image" />
        </div>
        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">
                Stay productive wherever you are.
            </h2>
            <p>
                Never let location be an issue when accessing your files. Fylo has you covered
                for all your file storage needs.
            </p>
            <p>
                Securely share files and folders with friends, family, and colleagues for live collaboration. 
                No email attachments required.
            </p>
            <a href="#">
                <span className="inline-flex items-center border-b  gap-2 text-[hsl(176,68%,64%)] hover:text-white
                                duration-150 ease-in-out ">
                    See how Fylo works 
                    <img src="../public/images/icon-arrow.svg" alt='arrow-icon' className="stroke-current"  />
                </span>
            </a>
        </div>
    </section>
}

export default HowFyloWorks;
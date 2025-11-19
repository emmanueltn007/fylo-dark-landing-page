const HeaderSection = () => {
    return <section className="flex flex-col items-center justify-center gap-8">
        <img className="w-[600px] h-auto"
         src="../public/images/illustration-intro.png" alt="hero-image" />
        <p className="text-white text-3xl">
            All your files in one secure location, accessible anywhere.
        </p>
        <p className="text-white">
            Fylo stores all your important files in one secure location.
            Access them wherever you need, share and collaborate with
            friends, family, and co-workers.
        </p>
        <button className="bg-[hsl(198,60%,50%)] text-white font-bold pt-2 pb-2 pl-16 pr-16 rounded-full">
            Get Started
        </button>
    </section>
}

export default HeaderSection;
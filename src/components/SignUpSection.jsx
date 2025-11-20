const SignUpSection = () => {
    return <section className="flex items-center justify-center relative">
        <div className="bg-[hsl(219,30%,18%)]  flex flex-col gap-4 w-[80%] md:w-[75%] p-8 shadow-3xl rounded-md top-0 left-1/2 -translate-x-1/2 md:translate-y-[15%] translate-y-[-15%] z-20 absolute">
            <h2 className="text-3xl text-white font-bold">
                Get early access today
            </h2>
            <p className="text-white">
                It only takes a minute to sign up and our free starter tier is extremely generous.
                If you have any questions, our team would be happy to help you.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
                <input className="bg-white w-full pt-3 pb-3 pl-3 rounded-full cursor-pointer outline-none" type="email" placeholder="email@example.com" />
                <button className="cursor-pointer bg-[hsl(198,60%,50%)] duration-200 ease-in-out hover:bg-[hsl(198,79%,67%)] text-white font-bold w-full pt-3 pb-3 rounded-full
                                    md:w-[40%]">
                    Get Started For Free
                </button>
            </div>
        </div>
    </section>
}

export default SignUpSection;
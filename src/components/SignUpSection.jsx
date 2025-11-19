const SignUpSection = () => {
    return <section className="bg-[hsl(219,73%,34%)] flex flex-col gap-4 p-16 shadow-3xl">
        <h2 className="text-3xl text-white font-bold">
            Get early access today
        </h2>
        <p className="text-white">
            It only takes a minute to sign up and our free starter tier is extremely generous.
            If you have any questions, our team would be happy to help you.
        </p>
        <div className="flex flex-col gap-2 md:flex-row">
            <input className="bg-white w-full pt-3 pb-3 pl-3 rounded-full" type="email" placeholder="email@example.com" />
            <button className="bg-[hsl(198,60%,50%)] text-white font-bold w-full pt-3 pb-3 rounded-full">
                Get Started For Free
            </button>
        </div>
        
    </section>
}

export default SignUpSection;
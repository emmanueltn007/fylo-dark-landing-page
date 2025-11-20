const Reviews = () => {
    return <section className="flex items-center flex-col gap-10 md:flex-row text-white pl-16 pr-16 px-4 py-20">
        <div className="bg-[hsl(219,30%,18%)] flex flex-col gap-4 pb-6 pt-6 pl-3 pr-3 rounded-md">
            <p>
                Fylo has improved our team productivity by an order of magnitude. Since making the 
                switch our team has become a well-oiled collaboration machine
            </p>
            <div className="flex gap-2">
                <img className="w-15 rounded-full" src="/images/profile-1.jpg" alt="" />
                <div className="flex flex-col">
                    <span className="font-bold">
                        Satish Patel
                    </span>
                    <span className="text-[0.7rem]">
                        Founder & CEO, Huddle
                    </span>
                </div>
                
            </div>  
        </div>
        
        <div className="bg-[hsl(219,30%,18%)] flex flex-col gap-4 pb-6 pt-6 pl-3 pr-3 rounded-md">
            <p>
                Fylo has improved our team productivity by an order of magnitude. Since making the 
                switch our team has become a well-oiled collaboration machine
            </p>
            <div className="flex gap-2">
                <img className="w-15 rounded-full" src="/images/profile-2.jpg" alt="" />
                <div className="flex flex-col">
                     <span className="font-bold">
                        Bruce McKenzie
                    </span>
                    <span className="text-[0.7rem]">
                        Founder & CEO, Huddle
                    </span>
                </div>
               
            </div>
        </div>

        <div className="bg-[hsl(219,30%,18%)] flex flex-col gap-4 pb-6 pt-6 pl-3 pr-3 rounded-md">
            <p>
                Fylo has improved our team productivity by an order of magnitude. Since making the 
                switch our team has become a well-oiled collaboration machine
            </p>
            <div className="flex gap-2">
                <img className="w-15 rounded-full" src="/images/profile-3.jpg" alt="" />
                <div className="flex flex-col">
                    <span className="font-bold"> 
                        Iva Boyd
                    </span>
                    <span className="text-[0.7rem]">
                        Founder & CEO, Huddle
                    </span>
                </div>
                
            </div>
        </div>
        
    </section>
}

export default Reviews;
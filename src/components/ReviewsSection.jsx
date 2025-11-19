const Reviews = () => {
    return <section className="flex items-center flex-col gap-16 md:flex-row text-white">
        <div className="bg-[hsl(219,30%,18%)] flex flex-col gap-8 p-6">
            <p>
                Fylo has improved our team productivity by an order of magnitude. Since making the 
                switch our team has become a well-oiled collaboration machine
            </p>
            <div className="flex gap-2">
                <img className="w-15 rounded-full" src="../public/images/profile-1.jpg" alt="" />
                <div className="flex flex-col">
                    <span className="font-bold">
                        Satish Patel
                    </span>
                    <span>
                        Founder & CEO, Huddle
                    </span>
                </div>
                
            </div>  
        </div>
        
        <div className="bg-[hsl(219,30%,18%)] flex flex-col gap-8 p-6">
            <p>
                Fylo has improved our team productivity by an order of magnitude. Since making the 
                switch our team has become a well-oiled collaboration machine
            </p>
            <div className="flex gap-2">
                <img className="w-15 rounded-full" src="../public/images/profile-2.jpg" alt="" />
                <div className="flex flex-col">
                     <span className="font-bold">
                        Bruce McKenzie
                    </span>
                    <span>
                        Founder & CEO, Huddle
                    </span>
                </div>
               
            </div>
        </div>

        <div className="bg-[hsl(219,30%,18%)] flex flex-col gap-8 p-6">
            <p>
                Fylo has improved our team productivity by an order of magnitude. Since making the 
                switch our team has become a well-oiled collaboration machine
            </p>
            <div className="flex gap-2">
                <img className="w-15 rounded-full" src="../public/images/profile-3.jpg" alt="" />
                <div className="flex flex-col">
                    <span className="font-bold"> 
                        Iva Boyd
                    </span>
                    <span>
                        Founder & CEO, Huddle
                    </span>
                </div>
                
            </div>
        </div>
        
    </section>
}

export default Reviews;
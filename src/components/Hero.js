function Hero(){
    return(
        <section className="Hero">
            <div className="container relative">
                <div className="flex flex-col w-[570px] absolute top-[328px]">
                    <h1 className="font-Ubuntu font-light text-[96px] leading-[110px] text-white mb-5">Inception</h1>
                    <div className="flex items-center gap-[20px] mb-[22px]">
                        <span className="font-Ubuntu font-medium text-[24px] leading-[27px] text-[#A7A7A7] pr-[10px] border-r-[2px] border-[#A7A7A7]">Sci-Fi  Thriller  2010</span>
                        <p className="font-Ubuntu font-medium text-[24px] leading-[27px] text-[#A7A7A7]">Channel 34</p>
                    </div>
                    <p className="mb-[55px] font-Ubuntu font-light text-[32px] leading-[37px] text-white">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <button className="w-[194px] py-[10px] bg-[#E13C52] rounded-[60px] text-white font-Ubuntu font-medium text-[24px] leading-[27,58px] border-[2px] border-transparent hover:bg-transparent hover:text-[#E13C52] hover:border-[2px] border-[#E13C52] duration-300">Watch Now</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
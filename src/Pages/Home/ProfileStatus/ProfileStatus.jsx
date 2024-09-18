

const ProfileStatus = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-[40px] pt-6">
                <div className='shadow p-7 pr-[28px] h-[380px] flex flex-col backgroundBannerImage bg-white'>
                    <div className="flex-1">
                    </div>
                    <div className="flex-1 ">
                        <button className='mb-3 uppercase bg-[#6c90a1] text-white rounded-[160px] text-[9.42px] py-[6px] px-[12px]'>Vien</button>
                        <div className="w-[214px]">
                            <h1 className="mb-[16px] text-[1.8rem] font-light text-white">MAGIC IS IN THE DETAILS</h1>
                            <p className="text-white text-[13.6px] ">Yes, it is indeed!</p>
                        </div>
                    </div>
                </div>
                <div className='shadow p-7 pr-[28px] h-[380px] bg-white'>
                    <h1 className='mb-8 text-[17px]'>
                        Cakes
                    </h1>
                    <div className='pr-[15px]'>
                        <div className='flex items-center text-[#3A3A3A] text-[12.8px]'>
                            <div className="flex-1">
                                <p>Marble Cake</p>
                                <p>Fruitcake</p>
                                <p>Chocolate Cake</p>
                                <p>Fat Rascal</p>
                                <p>Financier</p>
                                <p>Goose Breast</p>
                                <p>Parkin</p>
                                <p>Souffle</p>
                                <p>Merveilleux</p>
                                <p>Genoise</p>
                                <p>Goose Breast</p>
                                <p>Parkin</p>
                                <p>Merveilleux</p>
                                <p>Souffle</p>
                                <p>Merveilleux</p>
                            </div>
                            <div className="flex-1">
                                <p>Streuselkuchen</p>
                                <p>Tea Loaf</p>
                                <p>Nepoleonshat</p>
                                <p>Magdalena</p>
                                <p>Financier</p>
                                <p>Genoise</p>
                                <p>Streuselkuchen</p>
                                <p>Nepoleonshat</p>
                                <p>Magdalena</p>
                                <p>Financier</p>
                                <p>Genoise</p>
                                <p>Goose Breast</p>
                                <p>Parkin</p>
                                <p>Souffle</p>
                                <p>Merveilleux</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileStatus;

import img1 from '../../../assets/foodImg/pinterest (25).jpg'
import img2 from '../../../assets/foodImg/pinterest (26).jpg'
import img3 from '../../../assets/foodImg/pinterest (27).jpg'
import img4 from '../../../assets/foodImg/pinterest (28).jpg'
import PiechartProduct from '../PiechartProduct/PiechartProduct';

const ProductCard = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 pr-[40px] pt-6">
            <div className='shadow p-5 pr-[28px] h-[380px] bg-white'>
                <h1 className='mb-8 text-[17px]'>
                    Product Categories
                </h1>
                <div>
                    <PiechartProduct />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='shadow p-7 pr-[28px] h-[380px] bg-white'>
                    <h1 className='mb-8 text-[17px]'>
                        Logs
                    </h1>
                    <div className='pr-[15px]'>
                        <div className='flex items-center'>
                            <div className='log-indicator-danger p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px] '>14 products added</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='log-indicator p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px]'>	New sale: Napoleonshat</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='log-indicator p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px]'>New sale: Cremeschnitte</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='log-indicator p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px]'>	New sale: Soufflé</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='log-indicator-danger p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px]'>	2 categories added</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='log-indicator p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px]'>	New sale: Chocolate Cake</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='log-indicator p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px]'>	New sale: Magdalena</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='log-indicator p-[4.8px]'>
                            </div>
                            <div className='flex w-full justify-between items-center text-[12.8px]'>
                                <h1 className='p-[4.8px]'>New sale: Fat Rascal</h1>
                                <p className='p-[4.8px] text-[#909090]'>12.55</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shadow  p-7 pr-[28px] h-[380px] bg-white'>
                    <h1 className='mb-8 text-[17px]'>
                        Tickets
                    </h1>

                    <div className='overflow-y-auto  h-[270px]'>
                        <div className='flex mb-4 border-b mr-14'>
                            <div className='pb-4'>
                                <img src={img1} className='rounded-full object-cover h-[40px] w-[40px] ' alt="" />
                            </div>
                            <div className='pl-4 pr-2'>
                                <h1 className='text-[13.6px] text-[#3A3A3A] hover:text-[#145388]'>Mayra Sibley</h1>
                                <p className=' text-[12px] text-[#909090]'>09.08.2018 - 12.45</p>
                            </div>
                        </div>
                        <div className='flex mb-4 border-b mr-14'>
                            <div className='pb-4'>
                                <img src={img4} className='rounded-full object-cover h-[40px] w-[40px] ' alt="" />
                            </div>
                            <div className='pl-4 pr-2'>
                                <h1 className='text-[13.6px] text-[#3A3A3A] hover:text-[#145388]'>Mayra Sibley</h1>
                                <p className=' text-[12px] text-[#909090]'>09.08.2018 - 12.45</p>
                            </div>
                        </div>
                        <div className='flex mb-4 border-b mr-14'>
                            <div className='pb-4'>
                                <img src={img2} className='rounded-full object-cover h-[40px] w-[40px] ' alt="" />
                            </div>
                            <div className='pl-4 pr-2'>
                                <h1 className='text-[13.6px] text-[#3A3A3A] hover:text-[#145388]'>Mayra Sibley</h1>
                                <p className=' text-[12px] text-[#909090]'>09.08.2018 - 12.45</p>
                            </div>
                        </div>
                        <div className='flex mb-4 border-b mr-14'>
                            <div className='pb-4'>
                                <img src={img3} className='rounded-full object-cover h-[40px] w-[40px] ' alt="" />
                            </div>
                            <div className='pl-4 pr-2'>
                                <h1 className='text-[13.6px] text-[#3A3A3A] hover:text-[#145388]'>Mayra Sibley</h1>
                                <p className=' text-[12px] text-[#909090]'>09.08.2018 - 12.45</p>
                            </div>
                        </div>
                        <div className='flex mb-4 border-b mr-14'>
                            <div className='pb-4'>
                                <img src={img4} className='rounded-full object-cover h-[40px] w-[40px] ' alt="" />
                            </div>
                            <div className='pl-4 pr-2'>
                                <h1 className='text-[13.6px] text-[#3A3A3A] hover:text-[#145388]'>Mayra Sibley</h1>
                                <p className=' text-[12px] text-[#909090]'>09.08.2018 - 12.45</p>
                            </div>
                        </div>
                        <div className='flex mb-4 border-b mr-14'>
                            <div className='pb-4'>
                                <img src={img1} className='rounded-full object-cover h-[40px] w-[40px] ' alt="" />
                            </div>
                            <div className='pl-4 pr-2'>
                                <h1 className='text-[13.6px] text-[#3A3A3A] hover:text-[#145388]'>Mayra Sibley</h1>
                                <p className=' text-[12px] text-[#909090]'>09.08.2018 - 12.45</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default ProductCard;
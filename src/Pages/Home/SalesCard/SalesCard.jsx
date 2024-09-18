
import { GoStopwatch } from 'react-icons/go';
import img1 from '../../../assets/foodImg/pinterest (25).jpg'
import img2 from '../../../assets/foodImg/pinterest (26).jpg'
import img3 from '../../../assets/foodImg/pinterest (27).jpg'
import img4 from '../../../assets/foodImg/pinterest (28).jpg'
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';

const SalesCard = () => {
    return (
        <div className='pt-[24px] pr-[40px] '>

            <div className='flex flex-col lg:flex-row gap-6'>
                <div className='flex flex-col flex-1'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto'>
                        <div className='shadow py-[32px] px-[8px] h-[191px] bg-white rounded-md'>
                            <GoStopwatch className='h-[32px] w-[32px] text-center mx-auto' />
                            <p className='text-center font-semibold mb-0 text-[#8f8f8f] lineHeight text-[13px] py-[10px]'>Pending Orders</p>
                            <p className='lead text-center'>14</p>
                        </div>

                        <div className='shadow  py-[32px] px-[8px] h-[191px] bg-white rounded-md'>
                            <GoStopwatch className='h-[32px] w-[32px] text-center  mx-auto' />
                            <p className='text-center font-semibold mb-0 text-[#8f8f8f] lineHeight  text-[13px] py-[10px]'>Complete Orders</p>
                            <p className='lead text-center'>14</p>
                        </div>
                        <div className='shadow  py-[32px] px-[8px] h-[191px] bg-white rounded-md'>
                            <GoStopwatch className='h-[32px] w-[32px] text-center  mx-auto' />
                            <p className='text-center font-semibold mb-0 text-[#8f8f8f] lineHeight  text-[13px] py-[10px]'>Pending Orders</p>
                            <p className='lead text-center'>14</p>
                        </div>
                    </div>
                    <div className='shadow bg-white rounded-md  mt-[24px] h-[500px]'>
                        <SimpleLineChart />
                    </div>
                </div>
                <div className='shadow flex-1 p-7 pr-[28px] bg-white rounded-md'>
                    <h1 className='mb-8 text-[17px] border'>
                        Recent Orders
                    </h1>
                    <div className='overflow-y-auto h-[600px]  '>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img1} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#145388] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>ON HOLD</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Marble Cake</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img2} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#2A93D5] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>Processed</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Fat Rascal</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img3} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#145388] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>ON HOLD</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Marble Cake</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img4} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#2A93D5] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>Processed</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Fat Rascal</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img3} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#145388] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>ON HOLD</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Marble Cake</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img2} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#2A93D5] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>Processed</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Fat Rascal</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img1} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#145388] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>ON HOLD</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Marble Cake</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img4} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#2A93D5] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>Processed</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Fat Rascal</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                        <div className='flex mb-6'>
                            <div className='relative'>
                                <img src={img3} className='list_thumb object-cover h-[85px] w-[113.33px] ' alt="" />
                                <div className='absolute top-2 right7px bg-[#145388] borderRadius'>
                                    <h1 className='uppercase text-[10px] py-[5.6px] px-[11.84px] text-white'>ON HOLD</h1>
                                </div>
                            </div>
                            <div className='py-2 pl-4 pr-2'>
                                <h1 className='pb-2 text-[16px] text-[#3A3A3A] hover:text-[#145388]'>Marble Cake</h1>
                                <p className='text-[12px] pb-[4px]'>Wedding cake with flowers Macarons and blueberries </p>
                                <p className='text-[#145388] text-[12px]'>02.04.2018</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SalesCard;
import img1 from '../../../assets/foodImg/pinterest (25).jpg'
const LoginCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-[40px]">
            <div className='shadow  h-[650px] relative'>
                <div className='h-[650px]'>
                    <div className="h-[30%]">
                        <img src={img1} className='h-full object-cover w-full rounded-t-[0.75rem] ' alt="" />
                    </div>
                    <div className="h-[70%]">
                    </div>
                </div>
                <div className='absolute top-20 '>
                    <div className='bg-white'>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginCard;
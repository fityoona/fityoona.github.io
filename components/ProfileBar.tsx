export default function ProfileBar() {
    return (
        <div className='flex flex-col items-center w-60 h-screen border-l pt-8 gap-4'>
            <div className='
                flex justify-center items-center w-[84px] h-[84px] rounded-full
                bg-gradient-to-b from-red-500 via-blue-500 to-pink-500
                '>
                <img className='rounded-full w-20 h-20 border-4 border-white' src='pic3.jpg' width={80} height={80} alt='Profile' />
            </div>

            <div className='font-varela font-bold text-md text-gray-700'>Yoona Sang-Sri-Ngam</div>
            <div className='font-varela font-bold text-sm text-gray-500'>Bangkok, Thailand</div>
        </div>
    );
}
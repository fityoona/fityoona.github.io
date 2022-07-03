export default function ProfileBar() {
    return (
        <div className='flex flex-col items-center w-60 h-screen border-l pt-8 gap-4'>
            <img className='rounded-full' src='pic3.jpg' width={80} height={80} alt='Profile' />
            <div className='font-varela font-bold text-xl text-gray-700'>Yoona Ngamwong</div>
            <div className='font-varela font-bold text-md text-gray-500'>Bangkok, Thailand</div>
        </div>
    );
}
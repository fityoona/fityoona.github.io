import { HomeIcon, HeartIcon } from '@heroicons/react/outline';

export default function LeftBar() {
    return (
        <div className='flex flex-col justify-center items-center w-24 h-screen border-r gap-8'>
            <HomeIcon className='h-8'/>
            <HeartIcon className='h-8'/>
        </div>
    );
}
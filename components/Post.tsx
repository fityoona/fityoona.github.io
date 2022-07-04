import Avatar from "./Avatar";
import { DotsHorizontalIcon, HeartIcon, ChatAltIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/solid';

type PostType = {
    imgUrl?: string,
    vdoUrl?: string,
    vdoType?: string,
    desc?: string
}

export default function Post({ imgUrl, vdoUrl, vdoType, desc }: PostType) {
    return (
        <div className='break-inside bg-white rounded-[2.5rem] mb-8 pb-4'>
            <div className='flex justify-center items-center p-4'>
                <Avatar imgUrl='pic3.jpg' />
                <div className='grow pl-4'>
                    <div className='text-xs font-bold text-gray-600'>Yoona Sang-Sri-Ngam</div>
                    <div className='text-xs text-gray-500'>A Gym</div>
                </div>
                <DotsHorizontalIcon className='h-6 cursor-pointer text-gray-500' />
            </div>
            {imgUrl &&
                <div>
                    <img src={imgUrl} className='rounded-3xl' />
                </div>
            }
            {vdoUrl &&
                <video controls className='rounded-3xl'>
                    <source src={vdoUrl} type={vdoType} />
                </video>
            }
            <div className='flex justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <ActionIcon Icon={HeartIcon} />
                    <ActionIcon Icon={ChatAltIcon} />
                    <ActionIcon Icon={ShareIcon} />
                </div>
                <ActionIcon Icon={BookmarkIcon} />
            </div>
            <div className='flex justify-between items-center py-1 px-4'>
                <div className='text-xs'>
                    Liked by <span className='font-bold text-gray-600'>Yoona and 25 others</span>
                </div>
                <div className='-space-x-4'>
                    <img className="relative z-30 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="pic3.jpg" alt="like-by-user" />
                    <img className="relative z-20 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="like-by-user" />
                    <img className="relative z-10 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="like-by-user" />
                </div>
            </div>
            {
                desc &&
                <div className='flex px-2'>
                    <img className='h-6 -mt-2 -mr-1' src='double-quotes.png' />
                    <div className='text-xs text-gray-500 font-semibold'>
                        {desc}
                    </div>
                </div>
            }
            <div className='pt-3 pb-1 pl-7 text-xs text-gray-400 font-bold'>
                Date
            </div>
        </div>
    );
}

type IconType = {
    Icon: (props: React.ComponentProps<'svg'>) => JSX.Element,
    onClick?: () => void
}
function ActionIcon({ Icon, onClick }: IconType) {
    const handleClick = () => {
        if (onClick) onClick();
    }
    return (
        <Icon className='h-5 cursor-pointer text-gray-300' onClick={handleClick} />
    );
}
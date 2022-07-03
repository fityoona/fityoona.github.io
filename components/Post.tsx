import Avatar from "./Avatar";
import { DotsHorizontalIcon, HeartIcon, ChatAltIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/solid';

type PostType = {
    imgUrl?: string,
    vdoUrl?: string,
    vdoType?: string
}

export default function Post({ imgUrl, vdoUrl, vdoType }: PostType) {
    return (
        <div className='break-inside bg-white rounded-[2.5rem] mb-8 pb-4'>
            <div className='flex justify-center items-center p-4'>
                <Avatar imgUrl='pic3.jpg' />
                <div className='grow pl-4'>
                    <div>Name</div>
                    <div className='text-xs text-gray-500'>place</div>
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
        </div>
    );
}

type IconType = {
    Icon: (props: React.ComponentProps<'svg'>) => JSX.Element,
    onClick?: () => void
}
function ActionIcon({ Icon, onClick }: IconType) {
    return (
        <Icon className='h-5 cursor-pointer text-gray-300' onClick={onClick} />
    );
}
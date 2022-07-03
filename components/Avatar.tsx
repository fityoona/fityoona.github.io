type AvatarType = {
    imgUrl: string
}

export default function Avatar({ imgUrl }: AvatarType) {
    return (
        <img className='rounded-full' src={imgUrl} width={50}  alt='avatar' />
    );
}
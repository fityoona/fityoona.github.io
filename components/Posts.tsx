import Post from "./Post";

export default function Posts() {
    return (
        <div className="grow p-6 bg-gray-100 overflow-y-auto h-screen">
            <div className='masonry sm:masonry-sm md:masonry-md'>
                <Post imgUrl='pic1.webp' />
                <Post imgUrl='pic2.webp' />
                <Post vdoUrl='clip1.mp4' vdoType='video/mp4' />
                <Post imgUrl='pic1.webp' />
                <Post imgUrl='pic2.webp' />
                <Post vdoUrl='clip1.mp4' vdoType='video/mp4' />
            </div>
        </div>
    );
}
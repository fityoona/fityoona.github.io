import Post from "./Post";

const data = [
    {
        contentType: 'image/jpeg',
        imgUrl: 'running-with-corgi.jpg',
    },
    {
        contentType: 'image/webp',
        imgUrl: 'pic1.webp',
    },
    {
        contentType: 'image/webp',
        imgUrl: 'pic2.webp',
    },
    {
        contentType: 'video/mp4',
        vdoUrl: 'clip1.mp4',
    },
];
export default function Posts() {
    return (
        <div className="grow p-6 bg-gray-100 overflow-y-auto h-screen scrollbar-hide">
            <div className='masonry sm:masonry-sm md:masonry-md'>
                {
                    data.map((item) =>
                        item.imgUrl
                            ?
                            <Post imgUrl={item.imgUrl} />
                            :
                            <Post vdoUrl={item.vdoUrl} vdoType={item.contentType} />
                    )
                }

                <Post imgUrl='pic1.webp' />
                <Post imgUrl='pic2.webp' />
                <Post vdoUrl='clip1.mp4' vdoType='video/mp4' />

            </div>
        </div>
    );
}
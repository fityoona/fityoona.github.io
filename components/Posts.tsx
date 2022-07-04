import Post from "./Post";

const data = [
    {
        contentType: 'image/jpeg',
        imgUrl: 'running-with-corgi.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        contentType: 'image/webp',
        imgUrl: 'pic1.webp',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        contentType: 'image/webp',
        imgUrl: 'pic2.webp',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        contentType: 'video/mp4',
        vdoUrl: 'clip1.mp4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];
export default function Posts() {
    return (
        <div className="grow p-6 bg-gray-100 overflow-y-auto h-screen scrollbar-hide">
            <div className='masonry sm:masonry-sm md:masonry-md'>
                {
                    data.map((item, id) =>
                        item.imgUrl
                            ?
                            <Post key={`post-${id}`} imgUrl={item.imgUrl} desc={item.desc}/>
                            :
                            <Post key={`post-${id}`} vdoUrl={item.vdoUrl} vdoType={item.contentType} desc={item.desc} />
                    )
                }

                <Post imgUrl='pic1.webp' />
                <Post imgUrl='pic2.webp' />
                <Post vdoUrl='clip1.mp4' vdoType='video/mp4' />

            </div>
        </div>
    );
}
import { useContext } from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { Firestore } from "firebase/firestore";
import { addPost } from "../db/post";

export default function ProfileBar() {
    const { db } = useContext(FirebaseContext);

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

            {/* <button className='bg-red-400 p-4' onClick={() => handleTest(db)}>Test</button> */}
        </div>
    );
}

const handleTest = async (db: Firestore) => {
    const data = [
        {
            contentType: 'image/webp',
            content: 'pic1.webp',
            desc: 'Twin Look',
            location: 'A Gym'
        },
        {
            contentType: 'image/webp',
            content: 'pic2.webp',
            desc: 'Good morning, Teacher',
            location: 'A Gym'
        },
        {
            contentType: 'video/mp4',
            content: 'clip1.mp4',
            desc: 'who invented this ball!',
            location: 'A Gym'
        },
    ];

    data.forEach(async (item) => {
        let res = await addPost(db, item);
        console.log(res);
    });
}

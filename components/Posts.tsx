import { useContext, useEffect, useRef, useState } from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';
import { collection, getDocs, DocumentData } from 'firebase/firestore';

import Post from "./Post";

export default function Posts() {
    const { db } = useContext(FirebaseContext);
    const didRunRef = useRef(false);
    const [posts, setPosts] = useState<DocumentData[]>([]);
    useEffect(() => {
        if (didRunRef.current === false) {
            didRunRef.current = true;
            const posts: DocumentData[] = [];
            const getPosts = async () => {
                let postDocs = await getDocs(collection(db, "posts"));
                postDocs.forEach((doc) => {
                    posts.push({ ...doc.data(), id: doc.id });
                });
                setPosts(posts);
            }
            getPosts();
        }
    }, [db]);

    const data = [
        {
            contentType: 'image/jpeg',
            content: 'running-with-corgi.jpg',
            desc: 'Go running with a corgi',
            location: 'Shaolin Temple'
        },
    ];

    return (
        <div className="grow p-6 bg-gray-100 overflow-y-auto h-screen scrollbar-hide">
            <div className='masonry-1 lg:masonry-2 xl:masonry-3'>
                {
                    data.map((item, id) => <Post key={`post-${id}`} 
                                                contentType={item.contentType} 
                                                content={item.content}
                                                desc={item.desc}
                                                location={item.location} 
                                            />
                    )
                }
                {
                    posts.map((item) => <Post key={item.id} 
                                            contentType={item.contentType} 
                                            content={item.content}
                                            desc={item.desc}
                                            location={item.location}
                                            timestamp={item.timestamp}
                                        />
                    )
                }
            </div>
        </div>
    );
}
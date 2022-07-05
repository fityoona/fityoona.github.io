import { addDoc, collection, Firestore, serverTimestamp, Timestamp } from "firebase/firestore";

interface PostType {
    contentType: string;
    content?: string;
    desc?: string;
    location?: string;
    timestamp?: Timestamp;
}

const addPost = async (db: Firestore, post: PostType) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            contentType: post.contentType,
            content: post.content,
            desc: post.desc,
            location: post.location,
            timestamp: serverTimestamp(),
        });
        return { success: true, msg: `postId = ${docRef.id}` }
    } catch (e) {
        return { success: false, msg: e }
    }
}

export { addPost };
export type { PostType };

import Head from "next/head";
import { NextPage } from "next/types";

const Post: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Yoona Goes Fit</title>
                <meta name="description" content="Yoona Fitness" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                Post
            </div>
        </div>
    );
}

export default Post;
import Head from "next/head";
import { NextPage } from "next/types";

const Login: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Yoona Go Fit</title>
                <meta name="description" content="Yoona Fitness" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                Login
            </div>
        </div>
    );
}

export default Login;
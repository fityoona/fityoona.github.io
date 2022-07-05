import Head from "next/head";
import { NextPage } from "next/types";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const Login: NextPage = () => {
    const handleGithub = () => {
        const auth = getAuth();
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            
            console.log(token, user);
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;
            const credential = GithubAuthProvider.credentialFromError(error);

            console.log(errorCode, errorMessage, email, credential);
          });
    }

    return (
        <div>
            <Head>
                <title>Yoona Goes Fit</title>
                <meta name="description" content="Yoona Fitness" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex items-center justify-center h-screen'>
                <button className='flex items-center justify-between py-2 px-8 w-64 rounded-md bg-gray-600 text-white' onClick={handleGithub}>
                    <img src='GitHub-Mark-32px.png' alt='github logo' />
                    <span>Log In with GitHub</span>
                </button>
            </div>
        </div>
    );
}

export default Login;
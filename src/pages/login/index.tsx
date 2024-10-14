import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
        <style>
          {`
            body {
              font-family: 'Poppins', sans-serif;
            }
          `}
        </style>
      </Head>
      <div className="flex items-center justify-end min-h-screen">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-purple-800">
        {/* <img src="/assets/logo.png" alt="" />
        <img src="/assets/Perintilan 1.png" alt="" /> */}
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white" >
        <img src="/assets/bgLogin.png" alt="" />
        </div>
        <div className="z-10 flex items-center justify-center w-1/2 h-full">
          <div className="w-full max-w-md p-8 bg-purple-900 rounded shadow-md border-r-8">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Silahkan Masuk</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-400 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

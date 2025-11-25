import { useRouter } from 'next/router';
import React from 'react';

const FourOhFour: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timeout = setTimeout(() => router.push('/'), 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-900">
      <img src="https://raw.githubusercontent.com/ONyambura/pictures/refs/heads/main/N%20Logos%20-%20Purple/logo.png" width="64" />
      <p className="text-4xl text-white">Woopsss 404</p>
      <p className="text-lg text-white">Moving back to home...</p>
    </div>
  );
};

export default FourOhFour;

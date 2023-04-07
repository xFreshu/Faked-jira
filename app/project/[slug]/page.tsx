'use client';
import { useRouter } from 'next/navigation';

export default function Page({ params }: any) {
  const router = useRouter();
  const { slug } = params;
  return (
    <div>
      <h2>Project ID: {slug}</h2>
      <button onClick={() => router.push('/dashboard')}>Back</button>
    </div>
  );
}

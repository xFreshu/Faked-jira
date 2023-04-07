'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  return (
    <nav>
      <span>LOGO</span>
      <button onClick={() => router.push('/project/new-project')}>
        Create Project
      </button>
      <button onClick={() => router.push('/')}>Logout</button>
    </nav>
  );
};

export default Navigation;

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('currentUser');

    document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'accountType=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

    router.replace('/');
  }, [router]);

  return <p style={{ textAlign: 'center', marginTop: '100px' }}>Logging out...</p>;
}
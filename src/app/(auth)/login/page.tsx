import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import LoginPage from '@/components/auth/login';

export const dynamic = 'force-dynamic';

const page = async () => {
  const token = (await cookies()).get("token");

  if (token) {
    redirect("/");
  }

  return <LoginPage/>
}

export default page
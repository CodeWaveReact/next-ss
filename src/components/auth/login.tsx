'use client'

import { useRouter } from 'next/navigation';
import { startTransition, useActionState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { FormInput } from '@/components/FormInput';
import { FormData, loginValidationSchema } from '@/lib/validations';
import { login } from '@/lib/serverActions';
import { useForceReload } from '@/hooks/useForceReload';

export default function LoginPage() {
  // Check if the user is already logged in or not
  useForceReload();
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(login, null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: 'john@mail.com',
      password: 'changeme'
    }
  });

  useEffect(() => {
    if (state?.success) {
      toast.success("Login successful!");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  const onSubmit = async (data: FormData) => {
    startTransition(() => {
      formAction(data);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm">
            <FormInput
              id="email"
              type="email"
              error={errors.email?.message}
              placeholder="Email address"
              className="rounded-t-md mb-2"
              {...register('email')}
            />
            <FormInput
              id="password"
              type="password"
              error={errors.password?.message}
              placeholder="Password"
              className="rounded-b-md"
              {...register('password')}
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isPending ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
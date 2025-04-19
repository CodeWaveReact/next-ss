import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  id: string;
  type: string;
  error?: string;
  placeholder: string;
  className?: string;
} & UseFormRegisterReturn;

export function FormInput({
  id,
  type,
  error,
  placeholder,
  className = '',
  ...registerProps
}: FormInputProps) {
  return (
    <>
      <label htmlFor={id} className="text-gray-500">
        {placeholder}
      </label>

      <input
        id={id}
        type={type}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } placeholder-gray-500 text-gray-900 ${className} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
        placeholder={placeholder}
        {...registerProps}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </>
  );
} 
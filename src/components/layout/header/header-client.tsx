import Image from "next/image";
import LogoutButton from "./logout-button";

interface HeaderClientProps {
  profile: {
    name?: string;
    role?: string;
    avatar?: string;
  } | null;
}

export default function HeaderClient({ profile }: HeaderClientProps) {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Image width={40} height={40} className="rounded-full" src={profile?.avatar || "/public/vercel.svg"} alt="user" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{profile?.name || "Leslie Alexander"}</h3>
              <p className="text-xs text-indigo-600">{profile?.role || "Co-Founder / CEO"}</p>
            </div>
          </div>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
} 
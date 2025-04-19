import { getProfile } from "@/lib/serverActions";
import HeaderClient from "./header-client";

export default async function Header() {
  const profile = await getProfile();
  return <HeaderClient profile={profile} />;
}

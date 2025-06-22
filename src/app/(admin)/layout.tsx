import MainLayout from "@/components/MainLayout";
import useUser from "@/hooks/cookies";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await useUser();

  return <MainLayout user={user}>{children}</MainLayout>;
}

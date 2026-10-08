import HeaderMobile from "@/components/ui/layout/sidebar/HeaderMobile";
import Sidebar from "@/components/ui/layout/sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-col min-h-dvh md:flex-row-reverse">
        <HeaderMobile />
        <main className="flex-1 p-6 pb-28 md:min-w-0 md:overflow-y-auto md:pb-8 md:mr-48 lg:mr-64">
          {children}
        </main>
        <Sidebar />
      </div>
    </section>
  );
}

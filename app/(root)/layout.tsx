import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header";

export const metadata = {
  title: "Home",
  description: "This is an indevidual Home Meta deta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header></Header>
      {children}

      <Footer></Footer>
    </div>
  );
}

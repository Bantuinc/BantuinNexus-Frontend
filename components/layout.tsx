import Navbar from "./navbar";

export const metadata = {
  title: "Bubuget",
  description: "Budgeting & Managing Money for College Student",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex min-h-screen w-screen flex-row`}>
      <Navbar />
      <div className="relative h-full w-full flex-grow">{children}</div>
    </div>
  );
}

export default Layout;

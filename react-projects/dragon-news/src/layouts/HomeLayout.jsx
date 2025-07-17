import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function HomeLayout() {
  return (
    <>
      <div className="max-w-10/12 md:max-w-10/12 mx-auto">
        <header>
          <Header />
        </header>
        <nav>
          <Navbar />
        </nav>
        <main className="grid grid-cols-1 md:grid-cols-12 ">
          <aside className="md:col-span-3">
            <div className="p-4">
              <h2 className="text-xl font-bold">Sidebar</h2>
              <p className="text-gray-600">
                Links and additional content can go here.
              </p>
            </div>
          </aside>
          <section className="md:col-span-6">
            <div className="p-4">
              <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
              <p className="text-gray-600">
                This is the main content area where you can add your content.
              </p>
            </div>
          </section>
          <aside className="md:col-span-3">
            <div className="p-4">
              <h2 className="text-xl font-bold">Additional Info</h2>
              <p className="text-gray-600">
                More links or information can be placed here.
              </p>
            </div>
          </aside>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

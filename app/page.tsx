import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <header className="bg-blue-200 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold">Lorem ipsum Design</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Content 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Content 2
                </a>
              </li>
              <li>
                {' '}
                <Link
                  href="/login"
                  className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                >
                  <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <section className="mb-16">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="rounded bg-blue-600 px-4 py-2 text-white">
            LOGIN
          </button>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Content 1</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded bg-blue-500 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold">Content 2</h2>
          <div className="flex justify-between">
            <div className="w-1/3 rounded bg-gray-100 p-4">
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-1/3 rounded bg-blue-500 p-4">
              <p className="leading-tight text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-1/3 rounded bg-gray-100 p-4">
              <p className="leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-16 bg-blue-200 p-6">
        <p className="text-center">Footer content here</p>
      </footer>
    </>
  );
}

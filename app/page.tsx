import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { openSansBold, openSansExtraBold } from './ui/fonts';

export default function Page() {
  return (
    <>
      <main className="bg-white">
        <div className="background mb-16 bg-[url('../background-banner.png')] bg-right bg-no-repeat">
          <nav>
            <ul className="flex justify-end space-x-4 p-20">
              <li>
                <a
                  href="#section1"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Content 1
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Content 2
                </a>
              </li>
              <li>
                {' '}
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <span>Log in</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-10 pb-[250px] pl-56 pt-[86px]">
            <h1
              className={`${openSansExtraBold.className} mb-6 w-1/3 text-6xl`}
            >
              Lorem ipsum Design
            </h1>
            <p className="mb-4 w-[390px] text-[#99a4b7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button
              className={`${openSansBold.className} mt-20 rounded bg-blue-600 px-4 py-2 text-white`}
            >
              LOGIN
            </button>
          </div>
        </div>

        <div className="mb-16" id="section1">
          <div className="p-10 pb-[20px] pl-56 pt-[86px]">
            <h1
              className={`${openSansExtraBold.className} mb-6 w-1/3 text-6xl`}
            >
              Content 1
            </h1>
            <p className="mb-4 w-[390px] text-[#99a4b7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="ml-[12%] mr-[12%]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="col-span-1 rounded-md bg-white p-4">
                <Image
                  src="/img-mock.png"
                  width={280}
                  height={760}
                  className="hidden md:inline"
                  alt="Screenshots of the dashboard project showing desktop version"
                />
                <p className="mt-[20px] text-left text-[#99a4b7]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{' '}
                </p>
              </div>

              <div className="col-span-1 rounded-md bg-white p-4">
                <Image
                  src="/img-mock.png"
                  width={280}
                  height={760}
                  className="hidden md:inline"
                  alt="Screenshots of the dashboard project showing desktop version"
                />
                <p className="mt-[20px] text-left text-[#99a4b7]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{' '}
                </p>
              </div>

              <div className="col-span-1 rounded-md bg-white p-4">
                <Image
                  src="/img-mock.png"
                  width={280}
                  height={760}
                  className="hidden md:inline"
                  alt="Screenshots of the dashboard project showing desktop version"
                />
                <p className="mt-[20px] text-left text-[#99a4b7]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{' '}
                </p>
              </div>

              <div className="col-span-1 rounded-md bg-white p-4">
                <Image
                  src="/img-mock.png"
                  width={280}
                  height={760}
                  className="hidden md:inline"
                  alt="Screenshots of the dashboard project showing desktop version"
                />
                <p className="mt-[20px] text-left text-[#99a4b7]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="section2" className={`bg-[url('../background-banner2.png')]`}>
          <div className="p-10 pb-[250px] pr-56 pt-[86px]">
            <div className="float-right text-end">
              <h1
                className={`${openSansExtraBold.className} mb-6 w-full text-6xl`}
              >
                Content 2
              </h1>
              <p className="mb-4 w-[390px] text-[#99a4b7]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#4c98f7] p-6"></footer>
    </>
  );
}

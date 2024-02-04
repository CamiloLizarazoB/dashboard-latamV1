'use client';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import {
  PowerIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import styled from 'styled-components';
import { useState } from 'react';
import { signOutAction } from '@/app/lib/actions';

const SidebarContainer = styled.div`
  width: ${(props) => (props.expanded ? '200px' : '80px')};
  height: 100vh;
  color: #fff;
  transition: width 0.3s ease;
`;

const Sidebar = ({ expanded, toggleSidebar }) => {
  return (
    <SidebarContainer
      expanded={expanded}
      className="flex h-screen w-16 flex-col items-center bg-blue-700 py-4"
    >
      <div className="mb-4">
        <i className="fas fa-briefcase fa-2x text-white"></i>
      </div>
      <div className="mb-4">
        <i className="fas fa-star fa-2x text-white"></i>
      </div>
      <div>
        <i className="fas fa-cog fa-2x text-white"></i>
      </div>
      <div className="hidden h-auto w-full grow rounded-md bg-blue-700 md:block"></div>
      <div>
        <div>
          {expanded ? (
            <ArrowLeftCircleIcon onClick={toggleSidebar} className="w-full p-20" />
          ) : (
            <ArrowRightCircleIcon onClick={toggleSidebar} className="w-6" />
          )}
        </div>
        <form action={signOutAction}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-700 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </SidebarContainer>
  );
};

export default function SideNav() {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };
  return (
    <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />

    // <div className="flex h-full flex-col px-3 py-4 md:px-2">
    //   <Link
    //     className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
    //     href="/"
    //   >
    //     <div className="w-32 text-white md:w-40">
    //       <AcmeLogo />
    //     </div>
    //   </Link>
    //   <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
    //     <NavLinks />
    //     <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
    //     <form
    //       action={async () => {
    //         'use server';
    //         await signOut();
    //       }}
    //     >
    //       <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
    //         <PowerIcon className="w-6" />
    //         <div className="hidden md:block">Sign Out</div>
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

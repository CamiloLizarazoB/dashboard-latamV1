'use client';
import NavLinks from '@/app/ui/dashboard/nav-links';
import {
  PowerIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { signOutAction } from '@/app/lib/actions';
import styled from '@emotion/styled';

const SidebarContainer = styled('div')(
  ({ expanded }: { expanded: boolean }) => ({
    width: expanded ? '100px' : '80px',
    height: '100vh',
    color: '#fff',
    transition: 'width 0.3s ease',
  }),
);

const Sidebar = ({
  expanded,
  toggleSidebar,
}: {
  expanded: boolean;
  toggleSidebar: any;
}) => {
  return (
    <SidebarContainer
      expanded={expanded}
      className="flex h-screen w-16 flex-col items-center bg-blue-700 py-4"
    >
      <NavLinks expanded={expanded} />
      <div className="hidden h-auto w-full grow rounded-md bg-blue-700 md:block"></div>
      <div>
        <button>
          {expanded ? (
            <ArrowLeftCircleIcon
              width={'1px'}
              onClick={toggleSidebar}
              className="m-auto w-10"
            />
          ) : (
            <ArrowRightCircleIcon
              width={'1px'}
              onClick={toggleSidebar}
              className="m-auto w-10"
            />
          )}
        </button>
        <form action={signOutAction}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-700 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
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
  );
}

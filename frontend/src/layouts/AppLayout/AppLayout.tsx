import { FC, useState } from 'react';
import { ColorModeButton } from '@components';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import OpenSidebar from './blocks/OpenedSidebar';
import ClosedSidebar from './blocks/ClosedSidebar';

type AppLayoutProps = {
  display: FC;
};

export const AppLayout: FC<AppLayoutProps> = ({ display: DisplayComponent }) => {
  const theme = useAppSelector(selectTheme);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!DisplayComponent) return false;

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-[100vh] bg-neutral-200 dark:bg-indigo-950 flex items-center justify-center relative">
        <div
          className={`mr-auto h-[100vh] bg-indigo-950 dark:bg-neutral-200 flex flex-col items-center py-4 rounded-tr-sm rounded-br-sm transition-width duration-300 ${
            isSidebarOpen ? 'min-w-[12%] w-[12%]' : 'min-w-[5%] w-[5%]'
          }`}
        >
          {!isSidebarOpen ? (
            <ClosedSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          ) : (
            <OpenSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          )}
        </div>

        <div className='w-full h-screen'>
          <DisplayComponent />
        </div>

        <div className="absolute right-5 bottom-5">
          <ColorModeButton theme={theme} />
        </div>
      </div>
    </div>
  );
};

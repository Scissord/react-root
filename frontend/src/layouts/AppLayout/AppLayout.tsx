import { FC, useState } from 'react';
import { ColorModeButton } from '@components';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import { IconArrowRightSquare, IconArrowLeftSquare } from '@icons';

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
          className={`h-[100vh] bg-indigo-950 dark:bg-neutral-200 flex flex-col items-center py-4 rounded-tr-sm rounded-br-sm transition-width duration-300 ${
            isSidebarOpen ? 'min-w-[10%] w-[10%]' : 'min-w-[3%] w-[3%]'
          }`}
        >
          {!isSidebarOpen ? (
            <IconArrowRightSquare onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          ) : (
            <div className="ml-auto mr-3">
              <IconArrowLeftSquare onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            </div>
          )}
        </div>

        <DisplayComponent />
        <div className="absolute right-5 bottom-5">
          <ColorModeButton theme={theme} />
        </div>
      </div>
    </div>
  );
};

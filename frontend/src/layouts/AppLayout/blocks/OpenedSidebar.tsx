import { FC, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeftSquare, IconArticle, IconProduct } from "@icons";

type OpenedSidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const urls = [
  {
    icon: <IconArticle/>,
    label: 'Артикулы',
    path: '/articles'
  },
  {
    icon: <IconProduct/>,
    label: 'Номенклатура',
    path: '/products'
  }
]

const OpenSidebar: FC<OpenedSidebarProps> = (props) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;

  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="hover:bg-gray-100 hover:bg-opacity-20 hover:rounded-lg cursor-pointer p-2 ml-auto mr-3"
      >
        <IconArrowLeftSquare onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
      <div className="flex flex-col gap-3 pt-8">
        {urls.map((url) => (
          <div
            onClick={() => navigate(url.path)}
            className="flex items-center gap-3 hover:rounded-lg p-2 hover:bg-gray-100 hover:bg-opacity-20 cursor-pointer"
          >

            {url.icon}
            <p className="text-[13px] text-white dark:text-black">{url.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSidebar

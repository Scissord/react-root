import { FC, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowRightSquare, IconArticle, IconProduct } from "@icons";

type ClosedSidebarProps = {
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

const ClosedSidebar: FC<ClosedSidebarProps> = (props) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;

  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className=" hover:bg-gray-100 hover:bg-opacity-20 hover:rounded-lg cursor-pointer p-2"
      >
        <IconArrowRightSquare  />
      </div>
      <div className="flex flex-col gap-3 pt-8">
        {urls.map((url) => (
          <div
            onClick={() => navigate(url.path)}
            className="hover:rounded-lg p-2 hover:bg-gray-100 hover:bg-opacity-20 cursor-pointer"
          >
            {url.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClosedSidebar

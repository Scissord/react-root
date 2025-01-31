import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

export function IconArrowLeftSquare(props: any) {
  const theme = useAppSelector(selectTheme);

  return (
    <svg
      fill={theme === 'dark' ? '#000' : 'white'}
      viewBox="0 0 16 16"
      height="1.4em"
      width="1.4em"
      cursor="pointer"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M15 2a1 1 0 00-1-1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2zM0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm11.5 5.5a.5.5 0 010 1H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5z"
      />
    </svg>
  );
}

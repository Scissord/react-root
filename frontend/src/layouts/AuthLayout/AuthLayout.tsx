import { FC } from 'react';
import { ColorModeButton } from '@components';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

type AuthLayoutProps = {
	display: FC
}

export const AuthLayout: FC<AuthLayoutProps> = ({ display: DisplayComponent }) => {
	const theme = useAppSelector(selectTheme);

	if (!DisplayComponent) return false;
	return (
		<div className={theme === 'dark' ? 'dark' : ''}>
			<div className='min-h-[100vh] bg-neutral-200 dark:bg-indigo-950 flex items-center justify-center'>
        <DisplayComponent/>
				<div className='absolute right-5 bottom-5'>
					<ColorModeButton theme={theme}/>
				</div>
			</div>
		</div>
	)
}

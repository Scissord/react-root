import { FC } from 'react';
import styles from './AuthLayout.module.scss';

type AuthLayoutProps = {
	display: FC
}

export const AuthLayout: FC<AuthLayoutProps> = ({ display: DisplayComponent }) => {
	if (!DisplayComponent) return false;

	return (
		<div className={styles.container}>
			<DisplayComponent/>
		</div>
	)
}

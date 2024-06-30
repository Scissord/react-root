import { lazy } from 'react';
import { CW } from '@components';
import { IRoute } from '@interfaces';

const HomePage = lazy(() => import('@pages/Home'))
const LibraryPage = lazy(() => import('@pages/Library'))

const AppRoutes: IRoute[] = [
  { 
		path: "/", 
		element: CW(HomePage),
		layout: "app",
		title: "Home",
	},
	{ 
		path: "/library", 
		element: CW(LibraryPage),
		layout: "app",
		title: "Library",
	},
]

export default AppRoutes
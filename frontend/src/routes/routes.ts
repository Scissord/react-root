import AppRoutes from './app';
import AuthRoutes from './auth';

const routes = [
	...AuthRoutes,
	...AppRoutes,
]

export default routes

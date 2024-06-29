import { lazy } from 'react';
import { CW } from '@components';

const SignInPage = lazy(() => import('@pages/SignIn'))
const SignUpPage = lazy(() => import('@pages/SignUp'))

const AuthRoutes = [
	{ 
		path: "/login", 
		element: CW(SignInPage),
		layout: "auth",
		title: "Sign In",
	},
	{ 
		path: "/registration", 
		element: CW(SignUpPage),
		layout: "auth",
		title: "Sign Up",
	},
]

export default AuthRoutes
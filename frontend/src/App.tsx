import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthLayout, AppLayout, ErrorLayout } from "@layout";
import { PrivateRoute } from '@components';
import { NotFound } from '@pages/NotFound';
import { EnvironmentSettings } from '@types';
import Settings from '@utils/settings.json';
import routes from '@routes';

function App() {
  const user = JSON.parse(localStorage.getItem("user") ?? '{}');
  Axios.defaults.baseURL = Settings[process.env.NODE_ENV as keyof EnvironmentSettings].server_url

  if (user?.token) {
    Axios.defaults.headers.common["Authorization"] = "Bearer " + user.token
  }

  return (
    // here is providers
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={
              route.layout !== "auth" ? (
                // this need to throw away user from app if he is not authorized
                <PrivateRoute>
                  <AuthLayout display={route.element}/>
                </PrivateRoute>
              ) : (
                <AppLayout display={route.element}/>
              )
            } 
          />
        ))}

        {/* 404 */}
        <Route
          path="*"
          element={
            <ErrorLayout display={NotFound}/>
          }
        />
      </Routes>
    </Router>
  )
}

export default App

import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorLayout } from "@layout";
import { AuthRoute, PrivateRoute } from '@components';
import { NotFound } from '@pages/NotFound';
import { View } from '@context';
import { EnvironmentSettings } from '@types';
import Settings from '@utils/settings.json';
import routes from '@routes';

function App() {
  // const user = JSON.parse(localStorage.getItem("user") ?? '{}');
  // Axios.defaults.baseURL = Settings[process.env.NODE_ENV as keyof EnvironmentSettings].server_url

  // if (user?.token) {
  //   Axios.defaults.headers.common["Authorization"] = "Bearer " + user.token
  // }

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.layout === "app" ? (
                <PrivateRoute>
                  <View
                    title={route.title}
                    layout={route.layout}
                    display={route.element}
                  />
                </PrivateRoute>
              ) : route.layout === 'auth' && (
                <AuthRoute>
                  <View
                    title={route.title}
                    layout={route.layout}
                    display={route.element}
                  />
                </AuthRoute>
              )
              // route.layout === "auth" ? (
              //   <AuthRoute>
              //     <AuthLayout display={route.element}/>
              //   </AuthRoute>
              // ) : (
              //   // this need to throw away user from app if he is not authorized
              //   <PrivateRoute>
              //     <AppLayout display={route.element}/>
              //   </PrivateRoute>
              // )
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

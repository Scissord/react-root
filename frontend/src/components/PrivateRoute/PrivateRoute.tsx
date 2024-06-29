import { Navigate } from "react-router-dom"

// custom route object checks for an auth token before
// rendering the route – redirects if token is not present
export function PrivateRoute(){

  // check user exists
  const user = JSON.parse(localStorage.getItem("user") ?? '{}');

  if (user?.token){
    // if (permissions[user.permission][props.permission]){

    //   // user is good
    //   return props.children;

    // }
  }

  // user is not authenticated
  return <Navigate to='/login' />;

}
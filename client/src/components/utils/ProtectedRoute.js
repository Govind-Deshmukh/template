import React from "react";
import { Route, Redirect } from "react-router-dom";
import Parse from "parse";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = Parse.User.current();
        if (!currentUser) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;

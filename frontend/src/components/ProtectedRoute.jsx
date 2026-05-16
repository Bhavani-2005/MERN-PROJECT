import {
  Navigate,
} from "react-router-dom";

export default function ProtectedRoute({
  children,
  allowedRoles = [],
}) {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  /* NOT LOGGED IN */

  if (!user) {

    return (
      <Navigate to="/" />
    );
  }

  /* ROLE CHECK */

  if (
    allowedRoles.length > 0 &&

    !allowedRoles.includes(
      user.role
    )
  ) {

    return (
      <Navigate
        to="/dashboard"
      />
    );
  }

  return children;
}
import {
    Route,
    Redirect
  } from 'react-router-dom';
  
  function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        
        render={
          () => (
            !isAuthenticated ? (
              children
            ) : (
              <Redirect
                to="/orders"
              />
            ))
        }
      />
    );
  }
  
  export default PublicRoute;
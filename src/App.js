import React from 'react';
import { Dashboard} from './pages';
// , Login, PrivateRoute, AuthWrapper, Error 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Dashboard />
    // <AuthWrapper>
    //   <Router>
    //     <Routes>
    //       <Route
    //         path='/'
    //         element={
    //           <PrivateRoute>
    //             <Dashboard />
    //           </PrivateRoute>
    //         }
    //       />
    //       <Route path='login' element={<Login />} />
    //       <Route path='*' element={<Error />} />
    //     </Routes>
    //   </Router>
    // </AuthWrapper>
  );
}

export default App;

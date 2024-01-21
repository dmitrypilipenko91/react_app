import React from 'react';
import { useContext } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  return (
    isAuth
      ?
        <Routes>
            {privateRoutes.map(route => 
              <Route 
                element={<route.element/>} 
                path={route.path}
                key={route.path}/>
            )}
            <Route path='/*' element={<Navigate to='/posts' replace/>}/>
        </Routes>
      :
        <Routes>
          {publicRoutes.map(route => 
            <Route 
              element={<route.element/>} 
              path={route.path}
              key={route.path}/>
          )}
          <Route path='/*' element={<Navigate to='/login' replace/>}/>
        </Routes>
  )
}
export default AppRouter;
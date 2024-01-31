import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  
  return (
    <div className='navbar'>
        <Link to='/about'>О приложении</Link>
        <Link to='/posts'>Посты</Link>
        <MyButton onClick={logout}>Выйти</MyButton>
    </div>
  )
}
export default Navbar;
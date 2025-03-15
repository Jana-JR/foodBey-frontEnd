// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './theme/DarkTheme';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/Cart/Cart';
import { ProfileNavigation } from './components/profile/ProfileNavigation';
import { CustomerRoute } from './routers/CustomerRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './state/Authentication/Action';

function App() {

  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store => store)

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
  }, [auth.jwt])
  

  return (
<ThemeProvider theme={darkTheme}>
  <CssBaseline/>
  <CustomerRoute/>
</ThemeProvider>
  );
}

export default App;

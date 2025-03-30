// import logo from './logo.svg';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { CustomerRoute } from './routers/CustomerRoute';
import { getUser } from './state/Authentication/Action';
import darkTheme from './theme/DarkTheme';

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

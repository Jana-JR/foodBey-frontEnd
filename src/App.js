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




function App() {
  return (
<ThemeProvider theme={darkTheme}>
  <CssBaseline/>
  {/* <Navbar/> */}
  {/* <Home/> */}
  {/* <RestaurantDetails/> */}
  {/* <Cart/> */}
  {/* <ProfileNavigation/> */}
  <CustomerRoute/>

</ThemeProvider>
  );
}

export default App;

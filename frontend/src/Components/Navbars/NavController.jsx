import React from 'react'
import ExistingUserNav from './ExistingUserNav';
import HomeNav from './HomeNav';
import NewUserNav from './NewUserNav'

class NavController extends React.Component {
  render() {
    const currentPath = window.location.pathname;
    let Navbar;
  
      if (currentPath === '/Statistics' ) {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Posts') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/HomePage') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Settings') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Messages') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Profile') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Channels') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '//Notifications') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Settings/Basic') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Settings/AccountDetails') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/Settings/MemberShips') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/creator/:id') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/creator/') {
      Navbar = <ExistingUserNav />;
    } else if (currentPath === '/NewUser') {
      Navbar = <NewUserNav />;
    }  else {
      Navbar = <HomeNav />;
    }
    return (
      <div>
        {Navbar}
      </div>
    );
  }
}
export default NavController;


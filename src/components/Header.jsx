// bai tap 1

function Header() {
    let isUserLoggedIn =  true;

    return isUserLoggedIn? (
        <h1>Hello User</h1>
      ):(
        <h1>Login now</h1>
      )
}

export default Header;
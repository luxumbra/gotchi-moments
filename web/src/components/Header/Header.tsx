import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <header className="site-header font-display capitalize">
      <div className="site-header__wrapper">
        <div>
          <Link to={routes.home()} title="GotchiMoments">
            GM
          </Link>
        </div>
        <nav>
          {isAuthenticated ? (
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.wallet()}>Wallet</Link>
              </li>
              <li>
                <Link to={routes.messages()}>Messages</Link>
              </li>
              <li>
                <Link to={routes.chatroom()}>Chatroom</Link>
              </li>
              <li>
                <Link to={routes.selfie()}>Selfie</Link>
              </li>
              <li>
                <Link to={routes.profile()}>Profile</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.login()}>Login</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

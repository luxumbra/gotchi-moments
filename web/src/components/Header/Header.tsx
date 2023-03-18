import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  return (
    <header className="site-header">
      <h1>
        <Link to={routes.home()}>GotchiMemories</Link>
      </h1>
      <nav>
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
      </nav>
    </header>
  )
}

export default Header

// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import AppLayout from 'src/layouts/AppLayout/AppLayout'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={DefaultLayout}>
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={AppLayout}>
        <Private unauthenticated="login">
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/message" page={MessagePage} name="message" />
          <Route path="/messages" page={MessagesPage} name="messages" />
          <Route path="/chatroom" page={ChatroomPage} name="chatroom" />
          <Route path="/selfie" page={SelfiePage} name="selfie" />
          <Route path="/wallet" page={WalletPage} name="wallet" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

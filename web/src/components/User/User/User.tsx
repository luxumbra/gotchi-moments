import type { DeleteUserMutationVariables, FindUserById } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

interface Props {
  user: NonNullable<FindUserById['user']>
}

const User = ({ user }: Props) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            User {user.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{user.address}</td>
            </tr>
            <tr>
              <th>Locale</th>
              <td>{user.locale}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(user.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(user.updatedAt)}</td>
            </tr>
            <tr>
              <th>Mfa enabled</th>
              <td>{checkboxInputTag(user.mfa_enabled)}</td>
            </tr>
            <tr>
              <th>Image src</th>
              <td>{user.imageSrc}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{user.country}</td>
            </tr>
            <tr>
              <th>Banned</th>
              <td>{checkboxInputTag(user.banned)}</td>
            </tr>
            <tr>
              <th>Blocked</th>
              <td>{checkboxInputTag(user.blocked)}</td>
            </tr>
            <tr>
              <th>Beta access</th>
              <td>{checkboxInputTag(user.betaAccess)}</td>
            </tr>
            <tr>
              <th>Refresh token</th>
              <td>{user.refreshToken}</td>
            </tr>
            <tr>
              <th>Access token</th>
              <td>{user.accessToken}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUser({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default User

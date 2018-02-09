import React from 'react'
import { withState, branch, renderComponent, lifecycle, compose } from 'recompose'
import Loading from './Loading'
import { GREEN_300 } from '../constants/color'

const withLoadingState = withState('loading', 'setLoading', false)
const withUsersState = withState('users', 'setUsers', [])
const withLoading = branch(({ loading }) => loading, renderComponent(Loading))
const withLifecycle = lifecycle({
  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setTimeout(() =>
          this.setState({ users, loading: false })
        , 3000)
      })
  }
})

const List = (props) => (
  <div style={{ backgroundColor: GREEN_300 }}>
    <h2>Users</h2>
    { props.users.map(user => <div key={user.id}>{user.name}</div>) }
  </div>
)

const enhanceList = compose(
  withLoadingState,
  withUsersState,
  withLifecycle,
  withLoading,
)

const SuperList = enhanceList(List)

export default SuperList

import Avatar from 'design/atoms/avatar/Avatar'
import { SecondaryButton } from 'design/atoms/button/Button'
import Router from 'next/router'
import useSignIn from 'hooks/me/useSignIn'
import useWhoami from 'hooks/me/useWhoami'
import Route from 'hocs/Route'
import styled from '@emotion/styled'
import { useProfileActions } from './Profile.hooks'

const Box = styled.div`
  display: flex;
`

const Actions = styled.div`
  display: flex;

  & > * {
    margin-left: 8px;
  }
`

const User = styled.div`
  border-left: 1px solid #ddd;
  padding-left: 8px;
  margin-left: 8px;
  align-self: center;
`

const AvatarButton = styled.div`
  cursor: pointer;
`

const Profile = () => {
  const user = useWhoami()
  const { signIn, goNew, goWrite } = useProfileActions(user)

  return (
    <Box>
      {user && (
        <Actions>
          <Route path="/story/[...slug]">
            <SecondaryButton onClick={goWrite}>Write</SecondaryButton>
          </Route>
          <SecondaryButton onClick={goNew}>New</SecondaryButton>
        </Actions>
      )}
      <User>
        <AvatarButton onClick={signIn}>
          <Avatar src={user?.avatar} />
        </AvatarButton>
      </User>
    </Box>
  )
}

export default Profile

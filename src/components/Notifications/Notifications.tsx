import Link from 'next/link'
import React from 'react'
import {
  StyledNotifications,
  StyledNotificationsCard,
  StyledNotificationsCardContent,
  StyledNotificationsCardHeader,
  StyledNotificationsGoBackButton,
} from './Notifications.styled'

const Notifications = () => {
  return (
    <StyledNotifications>
      <StyledNotificationsCard>
        <StyledNotificationsCardContent>
          <StyledNotificationsCardHeader>
            Notifications
          </StyledNotificationsCardHeader>
          <Link passHref href="/register">
            <StyledNotificationsGoBackButton>
              Back to Sign up
            </StyledNotificationsGoBackButton>
          </Link>
        </StyledNotificationsCardContent>
      </StyledNotificationsCard>
    </StyledNotifications>
  )
}
export default Notifications

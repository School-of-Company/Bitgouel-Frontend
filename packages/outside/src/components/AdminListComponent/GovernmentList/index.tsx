import { useGetGovernment } from '@bitgouel/api'
import { NoneResult, WaitingAnimation } from '@bitgouel/common'
import { GovernmentDisplayInfo } from '../AdminDisplayInfo'
import { GovernmentItem } from '../AdminItemComponent'
import { UserListContainer } from '../NewUserList/style'

const GovernmentList = () => {
  const { data, isLoading } = useGetGovernment()

  return (
    <>
      <GovernmentDisplayInfo />
      <UserListContainer>
        {isLoading && <WaitingAnimation title={'대학 명단을'} />}
        {data?.governments.length <= 0 ? (
          <NoneResult title={'대학 명단이'} />
        ) : (
          data?.governments.map((government) => (
            <GovernmentItem
              key={government.id}
              governmentId={String(government.id)}
              name={government.governmentName}
              nameWidth='32.5rem'
            />
          ))
        )}
      </UserListContainer>
    </>
  )
}

export default GovernmentList

import { useGetGovernment } from '@bitgouel/api'
import { FieldEnumToKor, NoneResult, WaitingAnimation } from '@bitgouel/common'
import { GovernmentDisplayInfo } from '@outside/components/AdminDisplayInfo'
import { GovernmentItem } from '@outside/components/AdminItemComponent'
import { AdminItemListContainer } from '../style'

const GovernmentList = () => {
  const { data, isLoading } = useGetGovernment()

  return (
    <>
      <GovernmentDisplayInfo />
      <AdminItemListContainer>
        {isLoading && <WaitingAnimation title={'대학 명단을'} />}
        {data?.governments.length <= 0 ? (
          <NoneResult title={'대학 명단이'} />
        ) : (
          data?.governments.map((government) => (
            <GovernmentItem
              key={government.id}
              governmentId={String(government.id)}
              name={government.governmentName}
              nameWidth='35rem'
              otherName={FieldEnumToKor[government.field]}
              otherNameWidth='31rem'
            />
          ))
        )}
      </AdminItemListContainer>
    </>
  )
}

export default GovernmentList

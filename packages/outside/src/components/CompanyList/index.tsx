import { useGetCompany } from '@bitgouel/api'
import { NoneResult, WaitingAnimation } from '@bitgouel/common'
import { CompanyDisplayInfo } from '../AdminDisplayInfo'
import { CompanyItem } from '../AdminItemComponent'
import { UserListContainer } from '../NewUserList/style'

const CompanyList = () => {
  const { data, isLoading } = useGetCompany()

  return (
    <>
      <CompanyDisplayInfo />
      <UserListContainer>
        {isLoading && <WaitingAnimation title={'기업 명단을'} />}
        {data?.companies.length <= 0 ? (
          <NoneResult title={'기업 명단이'} />
        ) : (
          data?.companies.map((company) => (
            <CompanyItem
              key={company.id}
              companyId={String(company.id)}
              name={company.name}
              nameWidth='32.5rem'
            />
          ))
        )}
      </UserListContainer>
    </>
  )
}

export default CompanyList

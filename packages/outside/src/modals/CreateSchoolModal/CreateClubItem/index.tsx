import { SchoolClubInput, SchoolClubFilter } from '@outside/components'
import styled from '@emotion/styled'

const CreateClubItemContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const CreateClubItem = ({ placeholder }: { placeholder: string }) => {
  return (
    <CreateClubItemContainer>
      <SchoolClubInput placeholder={placeholder} />
      <SchoolClubFilter />
    </CreateClubItemContainer>
  )
}

export default CreateClubItem

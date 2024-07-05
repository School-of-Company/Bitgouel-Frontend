import { SchoolClubInput } from '@outside/components'

const CreateClubItem = ({ placeholder }: { placeholder: string }) => {
  return (
    <>
      <SchoolClubInput placeholder={placeholder} />
      <div>Filter</div>
    </>
  )
}

export default CreateClubItem

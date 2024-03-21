import { ClubDetailPage } from '@bitgouel/common'

const ClubDetail = ({ params }: { params: { clubId: string } }) => {
  return <ClubDetailPage clubId={params.clubId} />
}

export default ClubDetail

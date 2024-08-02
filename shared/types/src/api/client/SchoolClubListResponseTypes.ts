export interface ClubType {
  id: string
  name: string
}

interface SchoolClubListType extends ClubType{
  clubs: ClubType[]
}

export interface SchoolClubListResponseTypes {
  schools: SchoolClubListType[]
}

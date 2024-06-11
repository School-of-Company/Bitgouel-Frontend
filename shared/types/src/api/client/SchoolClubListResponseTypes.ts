export interface ClubType {
  id: string
  name: string
}

interface SchoolClubListType {
  id: string
  schoolName: string
  clubs: ClubType[]
}

export interface SchoolClubListResponseTypes {
  schools: SchoolClubListType[]
}

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { lectureQueryKeys } from "../../libs/queryKeys";
import { lectureUrl } from "../../libs/urlController";
import { get } from "../../libs";
import { AxiosResponse } from "axios";

interface LectureListItemType {
  id: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
  completeDate: string;
  lectureType: string;
  lectureStatus: string;
  headCount: number;
  maxRegisteredUser: number;
  lecturer: string;
}

export const useGetLectureList = (
  options?: UseQueryOptions<AxiosResponse<LectureListItemType[]>>
) =>
  useQuery<AxiosResponse<LectureListItemType[]>>(
    lectureQueryKeys.getLectureList(),
    () => get(lectureUrl.lecture()),
    options
  );

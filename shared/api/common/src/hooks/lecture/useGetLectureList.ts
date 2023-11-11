import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { lectureQueryKeys } from "../../libs/queryKeys";
import { lectureUrl } from "../../libs/urlController";
import { get } from "../../libs";
import { AxiosResponse } from "axios";

interface LectureItemType {
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
  options?: UseQueryOptions<AxiosResponse<LectureItemType[]>>
) =>
  useQuery<AxiosResponse<LectureItemType[]>>(
    lectureQueryKeys.getLectureList(),
    () => get(lectureUrl.lecture()),
    options
  );

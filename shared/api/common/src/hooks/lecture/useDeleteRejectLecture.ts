import { useMutation } from '@tanstack/react-query';
import { lectureQueryKeys } from '../../libs/queryKeys';
import { lectureUrl } from '../../libs/urlController';
import { del } from '../../libs';
import TokenManager from '../../libs/api/TokenManager';
import { AxiosResponse } from 'axios';

const tokenManager = new TokenManager();

export const useDeleteRejectLecture = (id: string) =>
  useMutation<AxiosResponse>(
    lectureQueryKeys.deleteLectureReject(id),
    () =>
      del(
        lectureUrl.lectureReject(id),
        // {},
        {
          headers: {
            Authorization:
              tokenManager.accessToken &&
              `Bearer ${tokenManager.accessToken}`,
          },
        }
      ),
    {
      onSuccess: (response) => {
        console.log(response.data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );


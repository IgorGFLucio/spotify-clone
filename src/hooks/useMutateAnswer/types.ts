import { AnswerResponse } from '@services/answer/types';

export interface MutateAnswerProps {
  onSuccess?: (res: AnswerResponse) => void;
  onError?: () => void;
}

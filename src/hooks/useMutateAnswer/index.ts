import { useRouter } from 'next/router';
import { useGameSteps } from '@global-stores/useGameSteps';
import { useAnswer } from '@services/answer';
import { MutateAnswerProps } from './types';

const useMutateAnswer = ({ onSuccess, onError }: MutateAnswerProps) => {
  const { push } = useRouter();

  const onReset = useGameSteps((state) => state.reset);
  const setIsPlaying = useGameSteps((state) => state.setIsPlaying);

  const { mutate } = useAnswer({
    onSuccess: (res) => {
      if (res.ok) {
        return onSuccess?.(res);
      }

      if (res?.erro === `resposta_incorreta`) {
        return onError?.();
      }

      // codigo_invalido.
      onReset();
      setIsPlaying(false);
      push(`/`);
    },
  });

  return {
    mutate,
    onSuccess,
    onError,
  };
};

export default useMutateAnswer;

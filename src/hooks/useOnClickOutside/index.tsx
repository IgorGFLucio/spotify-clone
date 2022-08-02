import { RefObject, useCallback, useEffect } from 'react';

const useOnOutsideClick = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  callback: () => void,
) => {
  const handleClick = useCallback(
    (e) => {
      let hasNoRefClicked = true;

      if (Array.isArray(ref)) {
        ref?.filter(Boolean)?.forEach((r) => {
          if (r?.current?.contains(e.target)) {
            hasNoRefClicked = false;
          }
        });

        if (hasNoRefClicked) {
          callback?.();
        }
      } else {
        if (ref.current && !ref.current.contains(e.target)) {
          callback?.();
        }
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener(`click`, handleClick);

    return () => {
      document.removeEventListener(`click`, handleClick);
    };
  }, [handleClick]);
};

export default useOnOutsideClick;

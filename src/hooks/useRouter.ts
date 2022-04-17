import type { Blocker, History, Transition } from 'history';
import { ContextType, useCallback, useContext, useEffect } from 'react';
import { Navigator as BaseNavigator, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

interface Navigator extends BaseNavigator {
  block: History['block'];
}

type NavigationContextWithBlock = ContextType<typeof NavigationContext> & { navigator: Navigator };

export function useBlocker(blocker: Blocker, when = true) {
  const { navigator } = useContext(NavigationContext) as NavigationContextWithBlock;

  useEffect(() => {
    if (!when) {
      return;
    }

    const unblock = navigator.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(message: string, when = true) {
  const blocker = useCallback(
    (tx: Transition) => {
      const response = window.confirm(message);
      if (response) {
        tx.retry();
      }
    },
    [message]
  );

  return useBlocker(blocker, when);
}

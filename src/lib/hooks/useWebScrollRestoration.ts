import {useMemo, useState, useEffect} from 'react'
import {EventArg, useNavigation} from '@react-navigation/core'

if ('scrollRestoration' in history) {
  // Tell the brower not to mess with the scroll.
  // We're doing that manuall below.
  history.scrollRestoration = 'manual'
}

function createInitialScrollState() {
  return {
    scrollYs: new Map(),
    focusedKey: null as string | null,
  }
}

export function useWebScrollRestoration() {
  const [state] = useState(createInitialScrollState)
  const navigation = useNavigation()

  useEffect(() => {
    function onDispatch() {
      if (state.focusedKey) {
        // Remember where we were for later.
        state.scrollYs.set(state.focusedKey, window.scrollY)
      }
    }
    // We want to intercept any push/pop/replace *before* the re-render.
    // There is no official way to do this yet, but this works okay for now.
    // https://twitter.com/satya164/status/1737301243519725803
    navigation.addListener('__unsafe_action__' as any, onDispatch)
    return () => {
      navigation.removeListener('__unsafe_action__' as any, onDispatch)
    }
  }, [state, navigation])

  const screenListeners = useMemo(
    () => ({
      beforeRemove(e: EventArg<'beforeRemove', boolean | undefined, unknown>) {
        state.scrollYs.delete(e.target)
      },
      focus(e: EventArg<'focus', boolean | undefined, unknown>) {
        const scrollY = state.scrollYs.get(e.target) ?? 0
        window.scrollTo(0, scrollY)
        state.focusedKey = e.target ?? null
      },
    }),
    [state],
  )
  return screenListeners
}

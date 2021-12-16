import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {

  // Try to get localstorage, if not use defaultVal:
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });

  // Set localstorage when state changes:
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];

}
export { useLocalStorageReducer };
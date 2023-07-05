export const useReactiveAction = (...args) => {
  // This function is used to pass data between components
  let actionData = (...args) => {};
  
  const actionTrigger = (...args) => {
    actionData && actionData(...args);
  };
  
  const actionDataHandler = (handler) => {
    actionData = handler;
  };

  return [actionTrigger, actionDataHandler, ...args]
}

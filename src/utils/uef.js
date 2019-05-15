export function uef(actionCreator) {
  return () => {
    actionCreator();
  };
}

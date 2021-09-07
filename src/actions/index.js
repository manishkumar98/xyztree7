export const increment = (id, counter) => ({
  type: "INCREMENT",
  id
});
export const addChild = (id, parentId) => ({
  type: "ADD_CHILD",
  id /*,
  parentId*/
});
export const removeChild = (id, parentId) => ({
  type: "REMOVE_CHILD",
  id,
  parentId
});

const removeProperty = (propKey, { [propKey]: propValue, ...rest }) => rest;

export default removeProperty;

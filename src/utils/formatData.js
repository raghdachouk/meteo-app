export const formatData = (data) => {
  if (data.cod === 200) {
    const result = Object.entries(data).flatMap(([key, value]) => {
      if (typeof value === 'object') {
        if (!Array.isArray(value)) {
          return Object.entries(value).map(([elt, val]) => ({
            [elt]: val,
          }));
        }
        return Object.entries(value[0]).map(([elt, val]) => ({
          [elt]: val,
        }));
      }
      return { [key]: value };
    });
    return result;
  }
  return [];
};

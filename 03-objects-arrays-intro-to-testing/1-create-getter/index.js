/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathToArray = path.split('.');

  return data => {
    let result = data;

    for (const item of pathToArray) {
      if (result === undefined) {
        break;
      }

      result = result[item];
    }

    return result;
  };
}

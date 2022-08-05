/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const result = [...arr];

  result.sort((a, b) => {
    if (param === 'asc') {
      return a.localeCompare(b, 'ru', {
        caseFirst: 'upper'
      });
    } else if (param === 'desc') {
      return b.localeCompare(a, 'ru', {
        caseFirst: 'upper'
      });
    } else {
      console.warn('Invalid param value');
    }
  });

  return result;
}

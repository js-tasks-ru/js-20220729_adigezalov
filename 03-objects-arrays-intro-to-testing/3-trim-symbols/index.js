/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  }

  if (size === 0) {
    return '';
  }

  let step = 0;
  const result = [];

  for (const letter of string) {
    if (result[result.length - 1] === letter) {
      if (step < size) {
        result.push(letter);
        step += 1;
      }
    } else {
      step = 1;
      result.push(letter);
    }
  }

  return result.join('');
}

// helper function to truncate a string to a desired length and on a wordboundary if desired
const truncate = (str, n, useWordBoundary) => {
  if (str.length <= n) {
    return str;
  }
  // truncate the string
  const subString = str.substr(0, n - 1);
  // drop the last word fragment - might be a whole word - oh well
  const temp = useWordBoundary ? subString.substr(0, subString.lastIndexOf(" ")) : subString;
  // remove any punctuation at the end and add ellipsis
  return `${temp.replace(/[,;:]$/, "")}...`;
};

export default truncate;

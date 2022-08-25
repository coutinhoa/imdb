export const limitTitle = (limit: number, str: string) => {
  let newStr = "";

  if (str.length < limit) {
    return str;
  }

  for (let i = 0; i < limit; i++) {
    newStr = newStr + str[i];
  }

  if (str.length !== newStr.length) {
    newStr = newStr + "...";
  }

  return newStr;
};

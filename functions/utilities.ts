export const clearInput = (className) => {
  // console.log(`.${className}`)
  const inputField = document.querySelector(
    `.${className} input`
  ) as HTMLInputElement;
  inputField.value = "";
  // console.log(inputField)
};

export const Capitalize = (data: string): string => {
  if (data) {
    let result = "";
    let stringArray: string[] = data.toString().split("");
    result = stringArray[0].toUpperCase() + stringArray.slice(1).join("");
    return result;
  } else {
    return data;
  }
};

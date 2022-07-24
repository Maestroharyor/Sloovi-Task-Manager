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

export const convertHMS = (timeString:string):number => {
  const numberArray = timeString.split(":");
  const seconds:number = Number(Number(numberArray[0])*3600 + numberArray[1]+60 + (+numberArray[2]));
  // const seconds:number = arr[0]*3600+arr[1]*60+(+arr[2]);
  return seconds;

}

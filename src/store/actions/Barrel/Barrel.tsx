
export function setIdBarrel(idBarrel: number) {
  return {
    type: GetLiteralInString('BARREL_SET_ID'),
    payload: idBarrel,
  };
}



function GetLiteralInString<T extends string>(str: T): T {
  return str;
}
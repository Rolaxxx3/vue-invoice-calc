export type StringOrNumber = string|number

export type VueGoodTableWithCheckbox = {
  originalIndex: number,
  vgtSelected: boolean,
  vgt_id: number,
}

export type VueGoodTableCol = {
  label: string,
  field: string,
  formatFn?: (str:string) => string,
}

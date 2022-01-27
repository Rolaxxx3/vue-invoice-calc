import { StringOrNumber } from "@/types/helpers"

export default function (str:StringOrNumber):string {
  return `$${str}`
}

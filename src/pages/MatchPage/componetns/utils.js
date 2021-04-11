export const DISABLED = "disabled"
export const ARRAY_CHILD = "arrrayChild"
export const DEFAULT = "default"

export function getPropType(property, suffix) {
  if (property.disabled)
    return DISABLED + suffix
  if (property.childOfComplex)
    return ARRAY_CHILD
  return DEFAULT
}
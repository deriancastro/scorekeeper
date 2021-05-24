export function add(...rest) {
  // rest ===[1,2,3]
  return rest.reduce((sum, cur) => sum + cur)
}

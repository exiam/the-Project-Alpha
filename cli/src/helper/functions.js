export const routes = {}
export let defaultFunction = () => {}
export let indexFunction = () => {}
/**
 * Add function
 * @param {string} param The parameter from the query if already exists, overwritten
 * @param {function} cb The function to execute
 */
export function add(param, cb) {
  routes[param] = cb
}
/**
 * Set default function
 * @param {function} cb The function to execute
 */
export function setDefault(cb) {
  defaultFunction = cb
}

/**
 * Set index function
 * @param {function} cb The function to execute
 */
export function setIndex(cb) {
  indexFunction = cb
}

/**
 * The function that execute the code
 * @param {array} params Raw parameters
 */
export function execute(params) {
  const p = params[2]

  if (params.length == 2 || p.startsWith('-')) {
    return indexFunction(params)
  }
  if (!p || !routes[p]) {
    return defaultFunction(params)
  }

  return routes[p](params)
}

export default execute

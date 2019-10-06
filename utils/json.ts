export const beautifier = (json: string) =>
  JSON.stringify(JSON.parse(json), null, 2)

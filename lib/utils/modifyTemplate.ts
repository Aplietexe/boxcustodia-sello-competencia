interface Copy extends Array<string> {
  raw?: string[]
}

const modifyTemplate = (
  strings: TemplateStringsArray,
  { append = "", prepend = "" },
) => {
  const copy: Copy = Array.from(strings)
  copy.raw = Array.from(strings.raw)

  copy[0] = prepend + copy[0]
  copy[copy.length - 1] += append

  copy.raw[0] = prepend + copy.raw[0]
  copy.raw[copy.raw.length - 1] += append

  return copy as TemplateStringsArray
}

export default modifyTemplate

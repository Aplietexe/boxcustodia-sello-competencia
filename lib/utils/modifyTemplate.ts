const modifyTemplate = (
  strings: TemplateStringsArray,
  { append = "", prepend = "" },
): TemplateStringsArray => {
  const main = Array.from(strings)
  main[0] = prepend + main[0]
  main[main.length - 1] += append

  const raw = Array.from(strings.raw)
  raw[0] = prepend + raw[0]
  raw[raw.length - 1] += append

  return Object.assign(main, { raw })
}

export default modifyTemplate

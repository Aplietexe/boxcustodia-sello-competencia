import type {
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components"
import { css } from "styled-components"

import breakpointSizes from "lib/breakpointSizes"
import { modifyTemplate } from "lib/utils"

interface CssFunction {
  (
    first: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation
}

const createBreakpointHelper = (breakpoint: number) => {
  const breakpointHelper: CssFunction = (strings, ...keys) => {
    const modified = modifyTemplate(strings, {
      append: " }",
      prepend: `@media (min-width:${breakpoint}px) { `,
    })

    return css(modified, ...keys)
  }

  return breakpointHelper
}

const md = createBreakpointHelper(breakpointSizes.md)
const lg = createBreakpointHelper(breakpointSizes.lg)
const xl = createBreakpointHelper(breakpointSizes.xl)

export { md, lg, xl }

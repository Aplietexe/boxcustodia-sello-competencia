import { useEffect, useState } from "react"

import breakpointSizes from "lib/breakpointSizes"

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable sort-keys-fix/sort-keys-fix */
const defaultBreakpoints = {
  xxl: false,
  xl: false,
  lg: false,
  md: false,
  sm: false,
}
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-enable sort-keys-fix/sort-keys-fix */

const getCurrentBreakpoints = () => {
  const width = window.innerWidth

  /* eslint-disable @typescript-eslint/naming-convention */
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  return {
    xxl: width >= breakpointSizes.xxl,
    xl: width >= breakpointSizes.xl,
    lg: width >= breakpointSizes.lg,
    md: width >= breakpointSizes.md,
    sm: width >= breakpointSizes.sm,
  }
  /* eslint-enable @typescript-eslint/naming-convention */
  /* eslint-enable sort-keys-fix/sort-keys-fix */
}

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(defaultBreakpoints)

  useEffect(() => {
    const handleResize = () => {
      setBreakpoints(getCurrentBreakpoints())
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return breakpoints
}

export default useBreakpoints

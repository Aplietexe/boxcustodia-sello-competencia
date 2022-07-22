import { useEffect, useState } from "react"

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

const breakpointSizes = {
  xxl: 1400,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
}
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

useBreakpoints.breakpointSizes = breakpointSizes

export default useBreakpoints

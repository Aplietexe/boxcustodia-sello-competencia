import type { Dispatch, SetStateAction } from "react"

type SetState<T> = Dispatch<SetStateAction<T>>

export type { SetState }

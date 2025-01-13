import {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useMemo,
} from 'react'

type Props = PropsWithChildren<{
  className: string
}>

const Section: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { className, children },
  ref
) => {
  const classNameDiv = useMemo(() => {
    let classes = 'container'

    if (className) {
      classes += ' ' + className
    }

    return classes
  }, [className])

  return (
    <div ref={ref} className="container-xxl py-5">
      <div className={classNameDiv}>{children}</div>
    </div>
  )
}

export default forwardRef<HTMLDivElement, Props>(Section)

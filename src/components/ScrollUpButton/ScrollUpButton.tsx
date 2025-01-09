import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useScrollThreshold from '../../hooks/useScrollThreshold/useScrollThreshold'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import './ScrollUpButton.scss'
import { useCallback } from 'react'

export default function ScrollUpButton() {
  const isScrolled = useScrollThreshold(315)

  const scrollUp = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    window.document.querySelectorAll('html, body').forEach(e => {
      e.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }, [])

  return (
    <button
      className={
        'btn btn-lg btn-primary btn-lg-square scroll-up-btn' +
        (isScrolled ? ' show' : '')
      }
      onClick={scrollUp}
    >
      <FontAwesomeIcon icon={faArrowUpLong} />
    </button>
  )
}

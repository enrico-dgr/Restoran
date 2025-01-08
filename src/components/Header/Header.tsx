import { PropsWithChildren } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

export default function Header({ children }: PropsWithChildren) {
  return (
    <div className="header container-xxl p-0">
      <Navbar />
      <div className="header__content container-xxl py-5 bg-dark mb-5">{children}</div>
    </div>
  )
}

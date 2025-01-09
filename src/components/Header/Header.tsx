import Navbar from '../Navbar/Navbar'
import './Header.scss'
import HeaderBookATable from './HeaderBookATable/HeaderBookATable'
import HeaderBreadcrumb from './HeaderBreadcrumb/HeaderBreadcrumb'

export default function Header({
  pagination = true,
}: {
  pagination?: boolean
}) {
  return (
    <div className="header container-xxl p-0">
      <Navbar />
      <div className="header__content container-xxl py-5 bg-dark mb-5">
        {pagination ? <HeaderBreadcrumb /> : <HeaderBookATable />}
      </div>
    </div>
  )
}

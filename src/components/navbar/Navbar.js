import logo from '../../images/logo.svg'
import search from '../../icons/search.svg'
import profile from '../../icons/user.svg'
import cart from '../../icons/cart.svg'

const Navbar = () => {
  return (
    <nav className="mx-10 sm:px-4 py-2.5 dark:text-gray-1000">
      <div className="container flex flex-wrap items-center justify-between mx-auto max-w-screen-3xl max-h-28">
        <a href="#">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Planty'x Logo" />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="xl:lg:md:gap-7 sm:gap-0 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent "
              >
                Plants
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent"
              >
                For offices
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Plants care
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="gap-0 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <img
                  src={search}
                  className="h-6 mr-3 sm:h-5"
                  alt="search icon"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <img
                  src={profile}
                  className="h-6 mr-3 sm:h-5"
                  alt="profile icon"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <img
                  src={cart}
                  className="h-6 mr-3 sm:h-5"
                  alt="cart icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

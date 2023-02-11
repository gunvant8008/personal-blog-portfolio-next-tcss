import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function Header() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme
    if (currentTheme === "dark") {
      return <button onClick={() => setTheme("light")}>SunIcon</button>
    } else {
      return <button onClick={() => setTheme("dark")}>MoonIcon</button>
    }
  }

  return (
    <header className="p-4 dark:bg-gray-700 dark:text-gray-100 bg-gray-200">
      <div className="container flex justify-between h-16 mx-auto">
        <div>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            Gunvant Sharma
          </a>
          {renderThemeChanger()}
        </div>

        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Link
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className=" mt-8 py-4 dark:bg-gray-700 bg-gray-200">
      <div className="container mx-auto flex justify-center">
        &copy; 2023 GS.Labs
      </div>
    </footer>
  )
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

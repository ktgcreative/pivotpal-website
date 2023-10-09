"use client"
import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Tools', href: '/tools/see-all' },
]
const casestudies = [
  { name: 'UK Crime', href: '/case-studies/police' },
  { name: 'Titanic', href: '/case-studies/titanic' },
  { name: 'Airbnb', href: '/case-studies/airbnb' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between p-6 lg:px-8 bg-white dark:bg-black" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PivotPal.</span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl">PivotPal.</h1>
          </a>
        </div>
        <div className="flex">
          <button
            type="button"
            className="inline-flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-gray-700 shadow-lg"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10">
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5 focus:ring-0">
                <span className="sr-only">PivotPal.</span>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl">PivotPal.</h1>
              </a>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-gray-700 shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="space-y-2 py-6">
                <p className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'>Case Studies:</p>
                {casestudies.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                Get Started
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

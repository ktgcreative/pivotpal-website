
const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Tools', href: '/tools/see-all' },
];
const casestudies = [
  { name: 'Titanic', href: '/case-studies/titanic' },
  { name: 'Crime', href: '/case-studies/police' },
  { name: 'Airbnb', href: '/case-studies/airbnb' },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PivotPal</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {navigation.map((item) => (
                  <li key={item.href} className="mb-4">
                    <a href={item.href} className="hover:underline">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Case Studies</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {casestudies.map((item) => (
                  <li key={item.href} className="mb-4">
                    <a href={item.href} className="hover:underline">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-4 sm:mb-0">© 2023 PivotPal. All Rights Reserved.</span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* Add your social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  )
}

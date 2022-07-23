import Image from 'next/image';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="">
            <div className={`flex justify-between items-center px-4 pt-4 py-3 bg-gray-200 dark:bg-dark-background`}>
                <span className="text-center text-base dark:text-white" style={{width:"96%"}}>&copy; {new Date().getFullYear()} Lifetechfacts GIT by <a href="https://www.ayomideodewale.com" target="_blank" rel="noreferrer" className={`text-primary dark:text-warning`}>Odewale Ayomide</a></span>
            </div>
        </footer>
  )
}

export default Footer
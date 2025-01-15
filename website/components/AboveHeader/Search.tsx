import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import { useSearch } from '@/utils/hooks'

const searchItems = [
  'Calendar', 'eLearning', 'Staff Portal', 'Student Portal', 'Apply Now',
  'Admissions', 'Academics', 'Research', 'Campus Life', 'About Us'
]

export const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { searchTerm, setSearchTerm, searchResults } = useSearch(searchItems)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-blue-600 focus:outline-none"
      >
        <FaSearch size={16} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-20"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 text-sm border-b focus:outline-none"
            />
            {searchResults.length > 0 && (
              <ul className="max-h-48 overflow-y-auto">
                {searchResults.map((item, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


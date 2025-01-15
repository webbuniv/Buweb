import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface SearchItem {
  title: string;
  link: string;
}

const searchItems: SearchItem[] = [
  { title: "Home", link: "/" },
  { title: "Admissions", link: "http://erms.bugemauniv.ac.ug/application" },
  { title: "Financial Information", link: "https://www.bugemauniv.ac.ug/finances.pdf" },
  { title: "Student Portal", link: "https://erms.bugemauniv.ac.ug/student/" },
  { title: "Student Portal New Students", link: "https://erms.bugemauniv.ac.ug/student/login" },
  { title: "Programs", link: "https://unche.or.ug/institution/bugema-university/" },
  { title: "About Bugema", link: "https://www.bugemauniv.ac.ug/whybugema" },
  { title: "Student Life", link: "https://www.bugemauniv.ac.ug/studentlife" },
  { title: "E-Learning", link: "https://elearning.bugemauniv.ac.ug/" },
  { title: "E-Library", link: "https://e-library.bugemauniv.ac.ug/" },
  { title: "Library", link: "https://www.myloft.xyz/" },
  { title: "Bulletin", link: "https://www.bugemauniv.ac.ug/docs/Bulletin.pdf" },
  { title: "Nursing Fees Structure", link: "https://www.bugemauniv.ac.ug/docs/NUR.pdf" },
  { title: "School of Graduate Studies", link: "https://www.bugemauniv.ac.ug/schools/school-of-graduate" },
  { title: "School of Business", link: "https://www.bugemauniv.ac.ug/schools/school-of-business" },
  { title: "School of Agriculture", link: "https://www.bugemauniv.ac.ug/schools/school-of-agric" },
  { title: "School of Education", link: "https://www.bugemauniv.ac.ug/schools/school-of-education" },
  { title: "School of Theology", link: "https://www.bugemauniv.ac.ug/schools/school-of-theology" },
  { title: "School of Health Sciences", link: "https://www.bugemauniv.ac.ug/schools/school-of-health" },
  { title: "School of Science And Technology", link: "https://www.bugemauniv.ac.ug/schools/school-of-science" },

  { title: "work program", link: "https://www.bugemauniv.ac.ug/work_program" },
  { title: "sports", link: "https://www.bugemauniv.ac.ug/sports/sports" },
  { title: "religion", link: "https://www.bugemauniv.ac.ug/religious/religious" },
  { title: "hospital", link: "https://www.bugemauniv.ac.ug/hospital" },
  { title: "News", link: "https://www.bugemauniv.ac.ug/news" },
  { title: "Events", link: "https://www.bugemauniv.ac.ug/events" },
  { title: "agriculture", link: "https://www.bugemauniv.ac.ug/agriculture" },
  // { title: "Research", link: "/research" },
  // { title: "Campus Life", link: "/campus-life" },
  // { title: "News & Events", link: "/news-events" },
  // { title: "Contact", link: "/contact" },
];

export const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filteredResults = searchItems.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      router.push(searchResults[0].link);
      setIsOpen(false);
    }
  };

  const handleResultClick = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-600 hover:text-blue-600 focus:outline-none"
        aria-label="Open search"
      >
        <FaSearch size={16} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl bg-white text-gray-500 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-4 text-lg focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close search"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleResultClick(item.link)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-colors duration-200"
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  searchTerm && (
                    <p className="px-4 py-3 text-gray-500">No results found</p>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


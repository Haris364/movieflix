import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/movieSlice";

import { FaSearch, FaFilm, FaFire, FaMoon } from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();

  const { query } = useSelector((state) => state.movies);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-slate-950/80
        border-b
        border-slate-800
        px-4
        md:px-8
        py-4
      "
    >
      <div className="flex items-center justify-between gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-cyan-500
              flex
              items-center
              justify-center
              shadow-lg
              shadow-cyan-500/30
            "
          >
            <FaFilm className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-wide">
              Movie<span className="text-cyan-400">Flix</span>
            </h1>

            <p className="text-slate-400 text-xs">
              Unlimited Movies Experience
            </p>
          </div>
        </motion.div>

        {/* SEARCH */}
        <div className="flex-1 hidden md:flex justify-center">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="
              relative
              w-full
              max-w-2xl
            "
          >
            <FaSearch
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
                text-lg
              "
            />

            <input
              type="text"
              value={query}
              onChange={(e) => dispatch(setQuery(e.target.value))}
              placeholder="Search movies, genres, actors..."
              className="
                w-full
                bg-slate-900/90
                border
                border-slate-800
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/20
                transition
                pl-14
                pr-5
                py-4
                rounded-2xl
                outline-none
                text-white
                placeholder:text-slate-500
              "
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <Link
          to="/"
          className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 transition border  border-slate-800  px-5 py-3 rounded-2xl"
        >
          Home
        </Link>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              hidden
              md:flex
              items-center
              gap-2
              bg-slate-900
              hover:bg-slate-800
              transition
              border
              border-slate-800
              px-5
              py-3
              rounded-2xl
            "
          >
            <FaFire className="text-orange-400" />

            <span className="font-medium">Trending</span>
          </motion.button>

          {/* THEME BUTTON */}
          <motion.button
            whileHover={{
              rotate: 15,
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className="
              w-12
              h-12
              rounded-2xl
              bg-slate-900
              hover:bg-slate-800
              border
              border-slate-800
              flex
              items-center
              justify-center
              transition
            "
          >
            <FaMoon className="text-cyan-400 text-lg" />
          </motion.button>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="mt-4 md:hidden">
        <div className="relative">
          <FaSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={query}
            onChange={(e) => dispatch(setQuery(e.target.value))}
            placeholder="Search movies..."
            className="
              w-full
              bg-slate-900
              border
              border-slate-800
              focus:border-cyan-500
              transition
              pl-12
              pr-4
              py-3
              rounded-2xl
              outline-none
            "
          />
        </div>
      </div>
    </motion.nav>
  );
}

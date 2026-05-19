import { motion } from "framer-motion";

import {
  FaFilm,
  FaStar,
  FaCalendarAlt,
  FaVideo,
  FaFilter,
  FaGlobe,
} from "react-icons/fa";

import { useDispatch } from "react-redux";

import {
  setGenre,
  setQuality,
  setRating,
  setYear,
  setLanguage,
  setOrderBy,
} from "../features/movieSlice";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        bg-slate-900/70
        backdrop-blur-xl
        border
        border-slate-800
        rounded-3xl
        p-6
        shadow-2xl
      "
    >
      {/* HEADER */}
      <div
        className="
        flex
        items-center
        gap-3
        mb-8
      "
      >
        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-cyan-500/10
          border
          border-cyan-500/20
          flex
          items-center
          justify-center
        "
        >
          <FaFilter
            className="
            text-cyan-400
            text-2xl
          "
          />
        </div>

        <div>
          <h1
            className="
            text-3xl
            font-black
            text-white
          "
          >
            Advanced Filters
          </h1>

          <p
            className="
            text-slate-400
            mt-1
          "
          >
            Discover movies your way
          </p>
        </div>
      </div>

      {/* FILTERS GRID */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-6
        gap-5
      "
      >
        {/* GENRE */}
        <motion.div whileHover={{ y: -4 }} className="space-y-2">
          <label
            className="
            text-sm
            text-slate-400
            flex
            items-center
            gap-2
          "
          >
            <FaFilm className="text-cyan-400" />
            Genre
          </label>

          <select
            onChange={(e) => dispatch(setGenre(e.target.value))}
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/20
              transition
              px-4
              py-3
              rounded-2xl
              outline-none
              text-white
            "
          >
            <option value="">All Genres</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>Animation</option>
            <option>Comedy</option>
            <option>Crime</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Mystery</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
            <option>Thriller</option>
          </select>
        </motion.div>

        {/* QUALITY */}
        <motion.div whileHover={{ y: -4 }} className="space-y-2">
          <label
            className="
            text-sm
            text-slate-400
            flex
            items-center
            gap-2
          "
          >
            <FaVideo className="text-cyan-400" />
            Quality
          </label>

          <select
            onChange={(e) => dispatch(setQuality(e.target.value))}
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/20
              transition
              px-4
              py-3
              rounded-2xl
              outline-none
              text-white
            "
          >
            <option value="">All Quality</option>
            <option>720p</option>
            <option>1080p</option>
            <option>2160p</option>
            <option>3D</option>
          </select>
        </motion.div>

        {/* YEAR */}
        <motion.div whileHover={{ y: -4 }} className="space-y-2">
          <label
            className="
            text-sm
            text-slate-400
            flex
            items-center
            gap-2
          "
          >
            <FaCalendarAlt className="text-cyan-400" />
            Release Year
          </label>

          <input
            type="number"
            placeholder="2025"
            onChange={(e) => dispatch(setYear(e.target.value))}
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/20
              transition
              px-4
              py-3
              rounded-2xl
              outline-none
              text-white
              placeholder:text-slate-500
            "
          />
        </motion.div>

        {/* RATING */}
        <motion.div whileHover={{ y: -4 }} className="space-y-2">
          <label
            className="
            text-sm
            text-slate-400
            flex
            items-center
            gap-2
          "
          >
            <FaStar className="text-yellow-400" />
            Minimum Rating
          </label>

          <input
            type="number"
            min="0"
            max="10"
            placeholder="8"
            onChange={(e) => dispatch(setRating(e.target.value))}
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/20
              transition
              px-4
              py-3
              rounded-2xl
              outline-none
              text-white
              placeholder:text-slate-500
            "
          />
        </motion.div>

        {/* LANGUAGE */}
        <motion.div whileHover={{ y: -4 }} className="space-y-2">
          <label
            className="
            text-sm
            text-slate-400
            flex
            items-center
            gap-2
          "
          >
            <FaGlobe className="text-cyan-400" />
            Language
          </label>

          <select
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/20
              transition
              px-4
              py-3
              rounded-2xl
              outline-none
              text-white
            "
          >
            <option value="">All Languages</option>
            <option value="en">English</option>
            <option value="ko">Korean</option>
            <option value="ja">Japanese</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
          </select>
        </motion.div>

        {/* SORT */}
        <motion.div whileHover={{ y: -4 }} className="space-y-2">
          <label
            className="
            text-sm
            text-slate-400
            flex
            items-center
            gap-2
          "
          >
            <FaFilter className="text-cyan-400" />
            Sort By
          </label>

          <select
            onChange={(e) => dispatch(setOrderBy(e.target.value))}
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/20
              transition
              px-4
              py-3
              rounded-2xl
              outline-none
              text-white
            "
          >
            <option value="desc">Latest</option>
            <option value="asc">Oldest</option>
            <option value="rating">Top Rated</option>
            <option value="download_count">Most Downloaded</option>
          </select>
        </motion.div>
      </div>
    </motion.div>
  );
}

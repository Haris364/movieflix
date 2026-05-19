import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaFire,
  FaFilm,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaExclamationTriangle,
  FaBolt,
} from "react-icons/fa";

import { useGetMoviesQuery } from "../services/movieApi";

import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import Filters from "../components/Filters";

import { nextPage, prevPage } from "../features/movieSlice";

export default function Home() {
  const dispatch = useDispatch();

  const { page, query, quality, genre, rating, year, language, orderBy } =
    useSelector((state) => state.movies);

  const { data, isLoading, isFetching, isError } = useGetMoviesQuery({
    page,
    query,
    quality,
    genre,
    rating,
    year,
    language,
    orderBy,
  });

  const movies = data?.data?.movies || [];
  const movieCount = data?.data?.movie_count || 0;

  const totalPages = Math.ceil(movieCount / 20);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[500px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
          alt=""
          className="
            w-full
            h-full
            object-cover
            opacity-30
          "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#020617]
          via-[#020617]/50
          to-transparent
        "
        />

        {/* GLOW EFFECT */}
        <div
          className="
          absolute
          top-20
          left-20
          w-[300px]
          h-[300px]
          bg-cyan-500/20
          blur-[120px]
          rounded-full
        "
        />

        {/* HERO CONTENT */}
        <div
          className="
          absolute
          inset-0
          flex
          flex-col
          justify-center
          px-6
          md:px-14
        "
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* BADGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                inline-flex
                items-center
                gap-2
                bg-cyan-500/10
                border
                border-cyan-500/20
                px-5
                py-2
                rounded-full
                mb-6
              "
            >
              <FaBolt className="text-cyan-400" />

              <span className="text-cyan-300 font-medium">
                Trending Movies Platform
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                mb-6
              "
            >
              Unlimited
              <span className="text-cyan-400"> Movie</span>
              <br />
              Experience
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                text-slate-300
                text-lg
                md:text-xl
                leading-relaxed
                max-w-2xl
              "
            >
              Explore top-rated, trending and latest movies with modern UI,
              smooth animations and powerful advanced filters.
            </motion.p>

            {/* HERO BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="
                flex
                flex-wrap
                gap-4
                mt-8
              "
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-cyan-500
                  hover:bg-cyan-400
                  transition
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  flex
                  items-center
                  gap-3
                  shadow-lg
                  shadow-cyan-500/30
                "
              >
                <FaFire />
                Explore Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/10
                  hover:bg-white/20
                  transition
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  flex
                  items-center
                  gap-3
                "
              >
                <FaFilm />
                Watch Trailer
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-4 md:px-8 py-10">
        {/* FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            bg-slate-900/60
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-6
            mb-10
          "
        >
          <div
            className="
            flex
            items-center
            gap-3
            mb-5
          "
          >
            <FaSearch className="text-cyan-400 text-xl" />

            <h2 className="text-2xl font-bold">Advanced Filters</h2>
          </div>

          <Filters />
        </motion.div>

        {/* TOP BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            mb-10
          "
        >
          {/* LEFT */}
          <div>
            <div
              className="
              flex
              items-center
              gap-3
              mb-2
            "
            >
              <FaFilm className="text-cyan-400 text-2xl" />

              <h2 className="text-4xl font-black">Movies Collection</h2>
            </div>

            <div
              className="
              flex
              items-center
              gap-4
              text-slate-400
            "
            >
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{movieCount} Movies Found</span>
              </div>

              <div className="w-1 h-1 bg-slate-500 rounded-full" />

              <span>
                Page {page} / {totalPages || 1}
              </span>
            </div>
          </div>

          {/* FETCHING */}
          {isFetching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                flex
                items-center
                gap-3
                bg-cyan-500/10
                border
                border-cyan-500/20
                px-5
                py-3
                rounded-2xl
                text-cyan-300
              "
            >
              <div
                className="
                w-5
                h-5
                border-2
                border-cyan-400
                border-t-transparent
                rounded-full
                animate-spin
              "
              />
              Updating Movies...
            </motion.div>
          )}
        </motion.div>

        {/* ERROR */}
        {isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              bg-red-500/10
              border
              border-red-500/30
              text-red-300
              p-6
              rounded-3xl
              mb-8
              flex
              items-center
              gap-4
            "
          >
            <FaExclamationTriangle className="text-2xl" />
            Failed to fetch movies.
          </motion.div>
        )}

        {/* MOVIES GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-8
            "
          >
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <MovieCard movie={movie} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  col-span-full
                  text-center
                  py-24
                "
              >
                <FaFilm
                  className="
                  text-7xl
                  text-slate-700
                  mx-auto
                  mb-6
                "
                />

                <h1
                  className="
                  text-5xl
                  font-black
                  mb-4
                "
                >
                  No Movies Found
                </h1>

                <p
                  className="
                  text-slate-400
                  text-lg
                "
                >
                  Try changing filters or search query
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-6
            mt-16
            bg-slate-900/60
            border
            border-slate-800
            backdrop-blur-xl
            rounded-3xl
            p-6
          "
        >
          {/* INFO */}
          <div className="text-slate-300">
            Showing page
            <span
              className="
              text-cyan-400
              font-bold
              mx-2
            "
            >
              {page}
            </span>
            of
            <span
              className="
              text-cyan-400
              font-bold
              mx-2
            "
            >
              {totalPages || 1}
            </span>
          </div>

          {/* BUTTONS */}
          <div
            className="
            flex
            items-center
            flex-wrap
            justify-center
            gap-3
          "
          >
            {/* PREV */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              disabled={page === 1}
              onClick={() => dispatch(prevPage())}
              className="
                bg-slate-800
                hover:bg-slate-700
                disabled:opacity-40
                disabled:cursor-not-allowed
                transition
                px-6
                py-3
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-2
              "
            >
              <FaArrowLeft />
              Previous
            </motion.button>

            {/* PAGE NUMBERS */}
            {[...Array(Math.min(totalPages, 5))].map((_, index) => {
              const pageNumber = page <= 3 ? index + 1 : page - 2 + index;

              if (pageNumber > totalPages) return null;

              return (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  key={pageNumber}
                  className={`
                    w-12
                    h-12
                    rounded-2xl
                    font-bold
                    transition

                    ${
                      page === pageNumber
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-slate-800 hover:bg-slate-700"
                    }
                  `}
                >
                  {pageNumber}
                </motion.button>
              );
            })}

            {/* NEXT */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              disabled={page >= totalPages}
              onClick={() => dispatch(nextPage())}
              className="
                bg-cyan-500
                hover:bg-cyan-400
                disabled:opacity-40
                disabled:cursor-not-allowed
                transition
                px-6
                py-3
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-2
                shadow-lg
                shadow-cyan-500/30
              "
            >
              Next
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

import { FaFire, FaFilm, FaArrowRight } from "react-icons/fa";

import MovieCard from "./MovieCard";
import Loader from "./Loader";

import { useGetSuggestionsQuery } from "../services/movieApi";

export default function SimilarMovies({ id }) {
  const { data, isLoading, isError } = useGetSuggestionsQuery(id);

  if (isLoading) return <Loader />;

  const movies = data?.data?.movies || [];

  return (
    <section className="mt-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-5
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
            mb-3
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
              <FaFilm
                className="
                text-cyan-400
                text-2xl
              "
              />
            </div>

            <div>
              <h1
                className="
                text-4xl
                font-black
                leading-tight
              "
              >
                Similar Movies
              </h1>

              <p
                className="
                text-slate-400
                mt-1
              "
              >
                Movies you may also like
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-cyan-500
            hover:bg-cyan-400
            transition
            px-6
            py-3
            rounded-2xl
            font-bold
            flex
            items-center
            gap-3
            shadow-lg
            shadow-cyan-500/30
            w-fit
          "
        >
          <FaFire />
          Trending Movies
          <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* ERROR */}
      {isError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            bg-red-500/10
            border
            border-red-500/20
            text-red-300
            p-6
            rounded-3xl
            text-center
          "
        >
          Failed to load similar movies.
        </motion.div>
      )}

      {/* NO MOVIES */}
      {!isError && movies.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            bg-slate-900/70
            border
            border-slate-800
            rounded-3xl
            p-16
            text-center
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
            text-4xl
            font-black
            mb-3
          "
          >
            No Similar Movies
          </h1>

          <p
            className="
            text-slate-400
            text-lg
          "
          >
            We couldn't find related movies.
          </p>
        </motion.div>
      )}

      {/* MOVIES GRID */}
      <div
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
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

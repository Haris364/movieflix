import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaStar, FaCalendarAlt, FaPlay, FaHeart } from "react-icons/fa";

export default function MovieCard({ movie }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        bg-slate-900/70
        backdrop-blur-xl
        border
        border-slate-800
        rounded-3xl
        overflow-hidden
        shadow-xl
        shadow-black/30
        relative
        transition
      "
    >
      <Link to={`/movie/${movie.id}`}>
        {/* IMAGE WRAPPER */}
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={movie.medium_cover_image}
            alt={movie.title}
            className="
              w-full
              h-[380px]
              object-cover
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
          "
          />

          {/* PLAY ICON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              group-hover:opacity-100
              transition
            "
          >
            <div
              className="
              w-14
              h-14
              bg-cyan-500
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
              shadow-cyan-500/40
            "
            >
              <FaPlay className="text-white" />
            </div>
          </motion.div>

          {/* RATING BADGE */}
          <div
            className="
            absolute
            top-3
            right-3
            bg-black/60
            backdrop-blur-xl
            px-3
            py-1
            rounded-full
            flex
            items-center
            gap-2
          "
          >
            <FaStar className="text-yellow-400 text-sm" />

            <span className="text-sm font-bold">{movie.rating}</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          {/* TITLE */}
          <h2
            className="
            text-lg
            font-bold
            mb-2
            line-clamp-1
          "
          >
            {movie.title}
          </h2>

          {/* META */}
          <div
            className="
            flex
            items-center
            justify-between
            text-slate-400
            text-sm
          "
          >
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-cyan-400" />

              {movie.year}
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              text-yellow-400
            "
            >
              <FaHeart />

              {movie.like_count || "N/A"}
            </div>
          </div>

          {/* GENRE TAGS */}
          <div
            className="
            flex
            flex-wrap
            gap-2
            mt-4
          "
          >
            {movie.genres?.slice(0, 2).map((g) => (
              <span
                key={g}
                className="
                  text-xs
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  text-cyan-300
                  px-3
                  py-1
                  rounded-full
                "
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

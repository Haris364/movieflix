import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaStar,
  FaClock,
  FaCalendarAlt,
  FaLanguage,
  FaPlay,
  FaDownload,
  FaFilm,
  FaUsers,
} from "react-icons/fa";

import Loader from "../components/Loader";
import SimilarMovies from "../components/SimilarMovies";

import { useGetMovieDetailsQuery } from "../services/movieApi";

export default function MovieDetails() {
  const { id } = useParams();

  const { data, isLoading } = useGetMovieDetailsQuery(id);

  if (isLoading) return <Loader />;

  const movie = data?.data?.movie;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        min-h-screen
        bg-[#020617]
        text-white
        overflow-hidden
      "
    >
      <div className="relative h-[700px]">
        
        <img
          src={movie.background_image_original}
          alt={movie.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-20
          "
        />

        
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#020617]
          via-[#020617]/80
          to-transparent
        "
        />

        
        <div
          className="
          relative
          z-10
          px-6
          md:px-12
          pt-28
        "
        >
          <div
            className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
          >
            
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={movie.large_cover_image}
                alt={movie.title}
                className="
                  rounded-3xl
                  w-full
                  max-w-md
                  shadow-2xl
                  shadow-cyan-500/20
                "
              />

              
              <div
                className="
                absolute
                top-5
                right-5
                bg-black/70
                backdrop-blur-xl
                px-4
                py-2
                rounded-2xl
                flex
                items-center
                gap-2
              "
              >
                <FaStar className="text-yellow-400" />

                <span className="font-bold">{movie.rating}</span>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              
              <h1
                className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                mb-5
              "
              >
                {movie.title}
              </h1>

              
              <div
                className="
                flex
                flex-wrap
                items-center
                gap-4
                mb-6
              "
              >
                <div
                  className="
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  px-4
                  py-2
                  rounded-full
                  flex
                  items-center
                  gap-2
                "
                >
                  <FaCalendarAlt className="text-cyan-400" />

                  {movie.year}
                </div>

                <div
                  className="
                  bg-yellow-500/10
                  border
                  border-yellow-500/20
                  px-4
                  py-2
                  rounded-full
                  flex
                  items-center
                  gap-2
                "
                >
                  <FaStar className="text-yellow-400" />
                  {movie.rating} Rating
                </div>
              </div>

              
              <p
                className="
                text-slate-300
                text-lg
                leading-relaxed
                mb-8
                max-w-3xl
              "
              >
                {movie.description_full}
              </p>

              
              <div
                className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
                mb-8
              "
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="
                    bg-slate-900/70
                    border
                    border-slate-800
                    backdrop-blur-xl
                    p-5
                    rounded-2xl
                  "
                >
                  <FaClock
                    className="
                    text-cyan-400
                    text-2xl
                    mb-3
                  "
                  />

                  <p className="text-slate-400 text-sm">Runtime</p>

                  <h2 className="font-bold text-lg">{movie.runtime} min</h2>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="
                    bg-slate-900/70
                    border
                    border-slate-800
                    backdrop-blur-xl
                    p-5
                    rounded-2xl
                  "
                >
                  <FaLanguage
                    className="
                    text-cyan-400
                    text-2xl
                    mb-3
                  "
                  />

                  <p className="text-slate-400 text-sm">Language</p>

                  <h2 className="font-bold text-lg uppercase">
                    {movie.language}
                  </h2>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="
                    bg-slate-900/70
                    border
                    border-slate-800
                    backdrop-blur-xl
                    p-5
                    rounded-2xl
                  "
                >
                  <FaFilm
                    className="
                    text-cyan-400
                    text-2xl
                    mb-3
                  "
                  />

                  <p className="text-slate-400 text-sm">Downloads</p>

                  <h2 className="font-bold text-lg">{movie.download_count}</h2>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="
                    bg-slate-900/70
                    border
                    border-slate-800
                    backdrop-blur-xl
                    p-5
                    rounded-2xl
                  "
                >
                  <FaUsers
                    className="
                    text-cyan-400
                    text-2xl
                    mb-3
                  "
                  />

                  <p className="text-slate-400 text-sm">Likes</p>

                  <h2 className="font-bold text-lg">{movie.like_count}</h2>
                </motion.div>
              </div>

             
              <div
                className="
                flex
                flex-wrap
                gap-3
                mb-10
              "
              >
                {movie.genres?.map((genre) => (
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    key={genre}
                    className="
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-300
                      px-5
                      py-2
                      rounded-full
                      font-medium
                    "
                  >
                    {genre}
                  </motion.span>
                ))}
              </div>

              
              <div
                className="
                flex
                flex-wrap
                gap-5
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
                  <FaPlay />
                  Watch Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    bg-slate-900/80
                    border
                    border-slate-800
                    hover:bg-slate-800
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
                  <FaDownload />
                  Download
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      
      <div className="px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="
            flex
            items-center
            gap-3
            mb-10
          "
          >
            <FaUsers
              className="
              text-cyan-400
              text-3xl
            "
            />

            <h1
              className="
              text-4xl
              font-black
              mt-16
            "
            >
              Movie Cast
            </h1>
          </div>

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-8
          "
          >
            {movie.cast?.map((actor, index) => (
              <motion.div
                key={actor.imdb_code}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                viewport={{ once: true }}
                className="
                  bg-slate-900/70
                  border
                  border-slate-800
                  backdrop-blur-xl
                  p-4
                  rounded-3xl
                  overflow-hidden
                "
              >
                <img
                  src={actor.url_small_image}
                  alt={actor.name}
                  className="
                    rounded-2xl
                    w-full
                    h-[260px]
                    object-cover
                    mb-4
                  "
                />

                <h2
                  className="
                  text-lg
                  font-bold
                  mb-1
                "
                >
                  {actor.name}
                </h2>

                <p
                  className="
                  text-slate-400
                  text-sm
                "
                >
                  {actor.character_name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="px-6 md:px-12 pb-20">
        <SimilarMovies id={id} />
      </div>
    </motion.div>
  );
}

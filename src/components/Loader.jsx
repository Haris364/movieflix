import { motion } from 'framer-motion'
import {
  FaFilm,
  FaPlay,
} from 'react-icons/fa'

export default function Loader() {

  return (

    <div className="
      min-h-screen
      bg-[#020617]
      flex
      items-center
      justify-center
      overflow-hidden
      relative
    ">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        w-[400px]
        h-[400px]
        bg-cyan-500/10
        blur-[120px]
        rounded-full
      " />

      {/* CONTENT */}
      <div className="
        relative
        z-10
        flex
        flex-col
        items-center
      ">

        {/* OUTER SPINNER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'linear',
          }}
          className="
            relative
            w-36
            h-36
            rounded-full
            border-[6px]
            border-cyan-500/20
            border-t-cyan-400
            flex
            items-center
            justify-center
            shadow-2xl
            shadow-cyan-500/20
          "
        >

          {/* INNER SPINNER */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear',
            }}
            className="
              w-24
              h-24
              rounded-full
              border-4
              border-slate-700
              border-b-cyan-400
              flex
              items-center
              justify-center
            "
          >

            {/* ICON */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-500
                flex
                items-center
                justify-center
                shadow-lg
                shadow-cyan-500/30
              "
            >

              <FaFilm className="
                text-white
                text-2xl
              " />

            </motion.div>

          </motion.div>

        </motion.div>

        {/* TEXT */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: 'reverse',
          }}
          className="
            text-4xl
            font-black
            mt-10
            text-white
          "
        >

          Movie<span className="text-cyan-400">
            Flix
          </span>

        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            text-slate-400
            mt-3
            text-lg
            flex
            items-center
            gap-2
          "
        >

          <FaPlay className="text-cyan-400" />

          Loading amazing movies...

        </motion.p>

        {/* LOADING DOTS */}
        <div className="
          flex
          gap-3
          mt-8
        ">

          {[0, 1, 2].map((dot) => (

            <motion.div
              key={dot}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: dot * 0.2,
              }}
              className="
                w-4
                h-4
                bg-cyan-400
                rounded-full
              "
            />

          ))}

        </div>

      </div>

    </div>
  )
}
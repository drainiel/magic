import arrow from '../assets/service-arrow.png'

export default function ServiceCard({ number, title, description, image }) {
  return (
    <div className="w-full border-t-2 border-white/40 py-8 md:py-10">
      <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-10">
        {/* Left — arrow */}
        <div className="flex-shrink-0">
          <img
            src={arrow}
            alt=""
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>

        {/* Center — text block */}
        <div className="flex-1 min-w-0">
          <p className="font-sans font-bold text-[#3DB4F8] text-sm md:text-base">
            {number}
          </p>
          <h3 className="font-serif text-white text-2xl md:text-3xl lg:text-4xl mt-1">
            {title}
          </h3>
          <p className="font-sans font-normal text-white/80 text-sm md:text-base mt-2 leading-relaxed max-w-none sm:max-w-2xl">
            {description}
          </p>

          {/* Mobile-only image */}
          <div className="mt-4 sm:hidden">
            <img
              src={image}
              alt={title}
              className="w-48 h-48 mx-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right — image (desktop only) */}
        <div className="flex-shrink-0 hidden sm:block">
          <img
            src={image}
            alt={title}
            className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

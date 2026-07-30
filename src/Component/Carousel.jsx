import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Carousel — React + Tailwind
 *
 * Props:
 *  - items: array of anything (image URLs, objects, JSX) — you control rendering via `renderItem`
 *  - renderItem: (item, index) => JSX  (optional, defaults to <img>)
 *  - autoPlay: boolean (default true)
 *  - interval: ms between auto-advances (default 4000)
 *  - loop: boolean, wrap around at the ends (default true)
 */
export default function Carousel({
  items = defaultItems,
  renderItem,
  autoPlay = true,
  interval = 4000,
  loop = true,
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const count = items.length;

  const goTo = useCallback(
    (i) => {
      if (loop) {
        setIndex(((i % count) + count) % count);
      } else {
        setIndex(Math.max(0, Math.min(count - 1, i)));
      }
    },
    [count, loop]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isPaused || count <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, isPaused, interval, next, count]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Touch / swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      touchDeltaX.current > 0 ? prev() : next();
    }
    touchDeltaX.current = 0;
  };

  return (
    <div
      className="relative w-full "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Track */}
      <div
        className="overflow-hidden rounded-2xl shadow-lg bg-neutral-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full shrink-0">
              {renderItem ? (
                renderItem(item, i)
              ) : (
                <img
                  src={item}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-80 sm:h-120"
                  draggable={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center
                       w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60
                       backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center
                       w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60
                       backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {count > 1 && (
        <div className="flex justify-center gap-2 mt-15">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none
                ${i === index ? "w-6 bg-neutral-900" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Fallback demo images if no items are passed in
const defaultItems = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe8f?w=800&q=80",
];
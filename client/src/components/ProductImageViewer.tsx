import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageViewerProps {
  images: string[];
  productName: string;
  selectedIndex: number;
  onSelectIndex: (i: number) => void;
  badge?: string;
}

const ZOOM_FACTOR = 4;

export default function ProductImageViewer({
  images,
  productName,
  selectedIndex,
  onSelectIndex,
  badge,
}: ProductImageViewerProps) {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(selectedIndex);

  // Magnifier state
  const [magnify, setMagnify] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const currentImage = images[selectedIndex];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imgContainerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    setCursorPos({ x, y });
    setHasMoved(true);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevLightbox = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextLightbox = () =>
    setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <>
      {/* ── Main card ── */}
      <div className="space-y-4">
        <motion.div
          ref={imgContainerRef}
          key={currentImage}
          initial={{ opacity: 0.6, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="relative rounded-2xl overflow-hidden border border-border/40 shadow-2xl cursor-zoom-in select-none"
          style={{ aspectRatio: "4/3", backgroundColor: '#ffffff' }}
          onMouseEnter={() => setMagnify(true)}
          onMouseLeave={() => { setMagnify(false); setHasMoved(false); }}
          onMouseMove={handleMouseMove}
          onClick={() => openLightbox(selectedIndex)}
        >
          {/* Solid background for image to avoid tinting from page background */}
          <div className="absolute inset-0 z-0" style={{ backgroundColor: '#ffffff' }} />
          
          {/* Subtle radial depth overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.02)_100%)] pointer-events-none z-1" />

          {/* Badge */}
          {badge && (
            <span className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wide uppercase">
              {badge}
            </span>
          )}

          {/* Zoom hint */}
          {!magnify && (
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full backdrop-blur-md pointer-events-none border border-white/10">
              <ZoomIn className="w-3.5 h-3.5" />
              Hover to zoom · Click to expand
            </div>
          )}

          {/* Product image - explicitly clear blend modes and filters */}
          <img
            src={currentImage}
            alt={productName}
            className="relative z-10 w-full h-full object-contain p-0 transition-transform duration-700 hover:scale-110"
            style={{ mixBlendMode: 'normal', filter: 'none' }}
            draggable={false}
          />

          {/* Magnifier lens overlay */}
          <AnimatePresence>
            {magnify && hasMoved && (
              <motion.div
                key="magnifier"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="absolute z-30 pointer-events-none rounded-full border-2 border-primary shadow-2xl overflow-hidden"
                style={{
                  width: 200, // Bigger lens
                  height: 200,
                  left: `calc(${cursorPos.x}% - 100px)`,
                  top: `calc(${cursorPos.y}% - 100px)`,
                  boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
                  backgroundColor: "white", // White bg for lens
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${currentImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${ZOOM_FACTOR * 100}%`,
                    backgroundPosition: `${cursorPos.x}% ${cursorPos.y}%`,
                  }}
                />
                {/* Lens shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Thumbnails ── */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-2.5">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => onSelectIndex(i)}
                className={`
                  relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none bg-white
                  ${
                    selectedIndex === i
                      ? "border-primary ring-2 ring-primary/25 shadow-lg scale-[1.04]"
                      : "border-border/30 hover:border-primary/40 hover:scale-[1.02]"
                  }
                `}
              >
                <img
                  src={img}
                  alt={`${productName} view ${i + 1}`}
                  className="w-full h-full object-contain p-1.5"
                  draggable={false}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            key="lightbox-backdrop"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {images.length > 1 && (
              <button
                className="absolute left-5 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <motion.div
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <img
                src={images[lightboxIndex]}
                alt={productName}
                className="max-h-[85vh] max-w-[90vw] object-contain drop-shadow-2xl rounded-xl"
                draggable={false}
              />
            </motion.div>

            {images.length > 1 && (
              <button
                className="absolute right-5 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === lightboxIndex
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

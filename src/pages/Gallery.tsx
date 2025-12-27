import { useState, useMemo, useEffect } from "react";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { X, Play, Image as ImageIcon, Monitor, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Dynamically import local assets
const videoModules = import.meta.glob('@/assets/gallery/vid-*.mp4', { eager: true, as: 'url' });
const imageModules = import.meta.glob('@/assets/gallery/img-*.jpeg', { eager: true, as: 'url' });
const ictModules = import.meta.glob('@/assets/gallery/ict-*.jpeg', { eager: true, as: 'url' });

// Asset Interface
interface GalleryItem {
  id: string;
  type: 'video' | 'photo' | 'ict';
  title: string;
  src: string;
  thumbnail?: string;
}

// Process Assets
const videos: GalleryItem[] = Object.keys(videoModules).map((path, index) => ({
  id: `vid-${index}`,
  type: 'video',
  title: `School Video ${index + 1}`,
  src: videoModules[path]
}));

const photos: GalleryItem[] = Object.keys(imageModules).map((path, index) => ({
  id: `img-${index}`,
  type: 'photo',
  title: `School Photo ${index + 1}`,
  src: imageModules[path]
}));

const ictPhotos: GalleryItem[] = Object.keys(ictModules).map((path, index) => ({
  id: `ict-${index}`,
  type: 'ict',
  title: `ICT Lab Session ${index + 1}`,
  src: ictModules[path]
}));

const allItems = [...videos, ...photos, ...ictPhotos];

type FilterType = 'all' | 'video' | 'photo' | 'ict';

const Gallery = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const filteredItems = useMemo(() => {
    if (filter === 'all') return allItems;
    return allItems.filter(item => item.type === filter);
  }, [filter]);

  const selectedItem = selectedIndex >= 0 && selectedIndex < filteredItems.length ? filteredItems[selectedIndex] : null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const FilterButton = ({ type, label, icon: Icon }: { type: FilterType, label: string, icon?: any }) => (
    <button
      onClick={() => {
        setFilter(type);
        setSelectedIndex(-1);
      }}
      className={cn(
        "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
        filter === type
          ? "bg-primary text-primary-foreground shadow-md scale-105"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );

  return (
    <Layout>
      <PageHeader
        title="Our Gallery"
        subtitle="Explore life at Little Eden School"
      />

      <section className="section-padding min-h-screen bg-background relative overflow-hidden">
        <div className="container relative z-10">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
            <FilterButton type="all" label="All Moments" />
            <FilterButton type="video" label="Videos" icon={Play} />
            <FilterButton type="photo" label="Photos" icon={ImageIcon} />
            <FilterButton type="ict" label="ICT Lab" icon={Monitor} />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-muted aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                onClick={() => setSelectedIndex(index)}
                style={{ animationDelay: `${index % 12 * 50}ms` }}
              >
                {/* Media Content */}
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    onMouseOver={e => e.currentTarget.play()}
                    onMouseOut={e => e.currentTarget.pause()}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="w-6 h-6 text-white fill-current" />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedIndex(-1)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-20 p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedIndex(-1)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Nav Buttons */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-3 hover:bg-white/10 rounded-full"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-3 hover:bg-white/10 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Content */}
          <div
            className="w-full max-w-6xl max-h-[90vh] flex items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <video
                  key={selectedItem.src} // Key forces re-render/reset on change
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>
            ) : (
              <img
                key={selectedItem.src}
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

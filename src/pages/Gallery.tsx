import { useState } from "react";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { X, Play, Image as ImageIcon } from "lucide-react";

// Dynamically import local assets
const videoModules = import.meta.glob('@/assets/gallery/vid-*.mp4', { eager: true, as: 'url' });
const imageModules = import.meta.glob('@/assets/gallery/img-*.jpeg', { eager: true, as: 'url' });

// Convert to arrays
const localVideos = Object.keys(videoModules).map((path, index) => ({
  id: `vid-${index}`,
  title: `Video ${index + 1}`, // Simplified title since we don't have metadata
  src: videoModules[path],
  thumbnail: null // Local videos usually need a distinct thumbnail or we use the video itself
}));

const localImages = Object.keys(imageModules).map((path, index) => ({
  id: `img-${index}`,
  title: `Photo ${index + 1}`,
  src: imageModules[path]
}));

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <PageHeader
        title="Our Gallery"
        subtitle="Capturing moments of joy and learning"
      />

      {/* Video Gallery */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localVideos.map((video, index) => (
              <div
                key={video.id}
                className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group animate-fade-up bg-muted shadow-md border border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedVideo(video.src)}
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-sm font-medium truncat">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localImages.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group animate-fade-up bg-muted shadow-sm hover:shadow-md transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ImageIcon className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}

    </Layout>
  );
};

export default Gallery;

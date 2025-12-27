import { useState } from "react";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { X, Play } from "lucide-react";

const galleryVideos = [
  { 
    id: "1",
    title: "School Campus Tour",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  { 
    id: "2",
    title: "Graduation Ceremony 2024",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  { 
    id: "3",
    title: "Sports Day Highlights",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  { 
    id: "4",
    title: "Classroom Activities",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  { 
    id: "5",
    title: "Annual Concert",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  { 
    id: "6",
    title: "Science Fair Exhibition",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
];

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Layout>
      <PageHeader
        title="Video Gallery"
        subtitle="Watch moments from our vibrant school community"
      />

      {/* Video Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((video, index) => (
              <div
                key={video.id}
                className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group animate-fade-up bg-muted"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedVideo(video.embedUrl)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center transition-opacity group-hover:bg-foreground/50">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <h3 className="text-background font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo + "?autoplay=1"}
              title="Video player"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

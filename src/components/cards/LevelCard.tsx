import { Link } from "react-router-dom";

interface LevelCardProps {
  image: string;
  title: string;
  link: string;
  delay?: number;
}

export const LevelCard = ({ image, title, link, delay = 0 }: LevelCardProps) => {
  return (
    <Link
      to={link}
      className="level-card group aspect-[4/5] animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="level-card-overlay" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-background mb-3">{title}</h3>
        <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
          Read More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { LevelCard } from "@/components/cards";
import { ChevronDown } from "lucide-react";
import heroBgImage from "@/assets/hero-bg.png";
import nurseryImage from "@/assets/gallery/img-1.jpeg";
import primaryImage from "@/assets/gallery/img-2.jpeg";
import classroomImage from "@/assets/gallery/img-3.jpeg";
import directorImage from "@/assets/gallery/img-4.jpeg";

const Index = () => {
  const scrollToContent = () => {
    document.getElementById("school-levels")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            alt="Little Eden School campus"
            className="w-full h-full object-cover"
            src={heroBgImage}
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-up">
            Welcome to Little Eden School
          </h1>
          <p
            className="text-lg md:text-xl text-background/90 mb-10 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Nurturing young minds with knowledge, compassion, and purpose.
          </p>
          <Button
            asChild
            size="lg"
            className="animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-background/80 hover:text-background transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </section>

      {/* School Levels Section */}
      <section id="school-levels" className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our School Levels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LevelCard
              image={nurseryImage}
              title="Nursery School"
              link="/programs"
              delay={0}
            />
            <LevelCard
              image={primaryImage}
              title="Primary School"
              link="/programs"
              delay={100}
            />
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Explore Our Campus
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Discover what makes our campus special. From well-equipped
                classrooms to a vibrant learning environment, we create spaces
                where students thrive both academically and socially.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>

            <div
              className="grid grid-cols-2 gap-4 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              <img
                src={heroBgImage}
                alt="Campus view"
                className="rounded-2xl shadow-card w-full h-48 object-cover"
              />
              <img
                src={classroomImage}
                alt="Classroom"
                className="rounded-2xl shadow-card w-full h-48 object-cover mt-8"
              />
              <img
                src={nurseryImage}
                alt="Nursery"
                className="rounded-2xl shadow-card w-full h-48 object-cover"
              />
              <img
                src={primaryImage}
                alt="Primary"
                className="rounded-2xl shadow-card w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="order-2 lg:order-1 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src={directorImage}
                alt="School Director"
                className="rounded-2xl shadow-card w-full max-w-md mx-auto"
              />
            </div>

            <div className="order-1 lg:order-2 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Message from the Director
              </h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>Dear Parents, Students, and Friends of Little Eden School,</p>
                <p>
                  It gives me great joy to welcome you to Little Eden School — a
                  caring education community dedicated to nurturing learners who
                  grow in knowledge, character, and confidence.
                </p>
                <p>
                  At Little Eden, our vision is not only to educate but to build
                  strong children for a strong Rwanda. We believe that true
                  education shapes both the mind and the heart.
                </p>
                <p className="font-medium text-foreground">
                  Welcome to Little Eden School — where learning transforms lives.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">IMANISHIMWE Amani</p>
                <p className="text-sm text-muted-foreground">
                  Director, Little Eden School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Accepting Applications for the 2025–26 School Year
            </h2>
            <p
              className="text-xl text-primary-foreground/90 mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Give your child the best start in life. Join the Little Eden family
              today.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Target, Eye, Heart, Star, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import slide1 from "@/assets/about/slide-1.png";
import slide2 from "@/assets/about/slide-2.png";
import slide3 from "@/assets/about/slide-3.png";
import slide4 from "@/assets/about/slide-4.png";

const slides = [slide1, slide2, slide3, slide4];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Discover the heart of Little Eden School and our commitment to nurturing young minds."
      />

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Welcome to Our School
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to Little Eden School
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Little Eden School is located in <strong className="text-foreground">Nyakiriba, Western Province, Rwanda</strong>. We provide quality education for <strong className="text-foreground">Nursery and Primary learners</strong>, focusing on academic excellence, strong discipline, and positive values.
                </p>
                <p>
                  Our goal is to help every child grow academically, socially, and emotionally in a safe and supportive environment. We believe that every child has unique potential, and our dedicated team works tirelessly to help each student discover and develop their abilities.
                </p>
              </div>
              <Button asChild className="mt-6">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-warm w-full group">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <img
                      src={slide}
                      alt={`Little Eden School Slide ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out scale-105 group-hover:scale-110"
                      style={{
                        transform: index === currentSlide ? "scale(1.1)" : "scale(1.0)"
                      }}
                    />
                  </div>
                ))}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                <div className="absolute -bottom-6 -left-6 bg-sunshine text-accent-foreground px-6 py-4 rounded-xl shadow-lg z-10 hidden md:block">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
                {/* Mobile Badge Position */}
                <div className="absolute bottom-4 left-4 bg-sunshine text-accent-foreground px-4 py-3 rounded-xl shadow-lg z-10 md:hidden">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-warm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality, affordable, and holistic education that prepares children for lifelong success. We strive to create a learning environment where every child can thrive academically, socially, and emotionally.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-sunshine/20 flex items-center justify-center text-earth mb-5">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading school in Rwanda, known for producing confident, well-rounded young learners ready to contribute positively to their communities and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-eden-green-light text-primary text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide everything we do at Little Eden School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Respect", description: "For self, others, and the environment" },
              { icon: Star, title: "Excellence", description: "Striving for the best in all we do" },
              { icon: CheckCircle, title: "Integrity", description: "Honesty and strong moral principles" },
              { icon: Target, title: "Responsibility", description: "Taking ownership of our actions" },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-eden-green-dark text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-eden-green-light">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Ready to join our community?</h3>
              <p className="text-muted-foreground">Learn more about our admission process and requirements.</p>
            </div>
            <Button asChild size="lg">
              <Link to="/admissions">View Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProgramCard } from "@/components/cards";
import { Clock, Calendar, Users } from "lucide-react";
import nurseryImage from "@/assets/nursery1.jpeg";
import primaryImage from "@/assets/primary.jpeg";

const Programs = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Programs"
        subtitle="Quality education tailored to every stage of your child's development."
      />

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Nursery Program */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-warm border border-border/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={nurseryImage}
                  alt="Nursery children doing arts and crafts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-sunshine text-accent-foreground text-sm font-medium mb-2">
                    Ages 3-5
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground">Nursery (Pre-school)</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our nursery program supports early childhood development through learning and play. We create a warm, stimulating environment where young children can explore, discover, and grow.
                </p>
                <h4 className="font-semibold text-foreground mb-4">What children learn:</h4>
                <ul className="space-y-3 mb-6">
                  {[
                    "Alphabet and early reading skills",
                    "Numbers, counting, and basic maths",
                    "Drawing, music, and creative activities",
                    "Social skills, confidence, and good behavior",
                    "Motor skills development through play",
                    "Introduction to English and Kinyarwanda",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Half-day & Full-day options</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Small class sizes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Program */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-warm border border-border/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={primaryImage}
                  alt="Primary students reading in the library"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-2">
                    Ages 6-12
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground">Primary (P1 – P6)</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our primary program builds strong academic foundations and good character. Students develop critical thinking skills and a love for learning that will serve them throughout their lives.
                </p>
                <h4 className="font-semibold text-foreground mb-4">Curriculum includes:</h4>
                <ul className="space-y-3 mb-6">
                  {[
                    "English, Kinyarwanda, and French languages",
                    "Mathematics and problem-solving",
                    "Science and environmental studies",
                    "Social studies and history",
                    "Physical education and sports",
                    "Arts, music, and creative expression",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-sunshine mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Full academic year</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Qualified teachers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Activities */}
      <section className="section-padding bg-gradient-warm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sunshine/20 text-earth text-sm font-medium mb-4">
              Beyond Academics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Extra-Curricular Activities
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a variety of activities to help children develop their talents and interests.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { emoji: "⚽", title: "Sports" },
              { emoji: "🎨", title: "Art & Craft" },
              { emoji: "🎵", title: "Music" },
              { emoji: "📚", title: "Reading Club" },
              { emoji: "🌱", title: "Gardening" },
              { emoji: "🎭", title: "Drama" },
              { emoji: "🧮", title: "Math Club" },
              { emoji: "🎤", title: "Public Speaking" },
            ].map((activity, index) => (
              <div
                key={activity.title}
                className="bg-card p-5 rounded-xl text-center shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <span className="text-3xl mb-2 block">{activity.emoji}</span>
                <span className="text-sm font-medium text-foreground">{activity.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Take the first step towards giving your child a quality education at Little Eden School.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;

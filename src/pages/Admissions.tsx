import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { StepCard } from "@/components/cards";
import { FileText, Calendar, CreditCard, CheckCircle, Phone, Mail } from "lucide-react";

const Admissions = () => {
  return (
    <Layout>
      <PageHeader 
        title="Admissions" 
        subtitle="Join our family and give your child the gift of quality education."
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Join Our Family
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple Enrollment Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We welcome new learners to our Nursery and Primary sections. Follow these simple steps to become part of the Little Eden community.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StepCard
              number={1}
              title="Contact Us"
              description="Call or email to check for available places in your child's grade level."
              delay={0}
            />
            <StepCard
              number={2}
              title="Visit School"
              description="Schedule a visit to tour our campus and meet our teachers (Recommended)."
              delay={100}
            />
            <StepCard
              number={3}
              title="Submit Documents"
              description="Fill out the enrollment form and provide required documents."
              delay={200}
            />
            <StepCard
              number={4}
              title="Complete Enrollment"
              description="Pay fees and receive confirmation. Welcome to Little Eden!"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-gradient-warm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Required Documents */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Required Documents</h3>
              <ul className="space-y-4">
                {[
                  "Birth certificate (photocopy)",
                  "Passport-size photos (2)",
                  "Previous school report (if applicable)",
                  "Health/immunization record",
                  "Parent/Guardian ID copy",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Age Requirements */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-sunshine/20 flex items-center justify-center text-earth mb-5">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Age Requirements</h3>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-eden-green-light/50">
                  <h4 className="font-semibold text-foreground mb-2">Nursery (Pre-school)</h4>
                  <p className="text-muted-foreground">Children aged 3 to 5 years old</p>
                </div>
                <div className="p-4 rounded-xl bg-sunshine-light/50">
                  <h4 className="font-semibold text-foreground mb-2">Primary 1 (P1)</h4>
                  <p className="text-muted-foreground">Children who are at least 6 years old</p>
                </div>
                <div className="p-4 rounded-xl bg-sky-light/50">
                  <h4 className="font-semibold text-foreground mb-2">Primary 2-6</h4>
                  <p className="text-muted-foreground">Based on previous school records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Fees */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                <CreditCard className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                School Fees
              </h2>
              <p className="text-muted-foreground text-lg">
                We offer affordable, quality education for all families.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm border border-border/50">
              <div className="text-center p-8 rounded-xl bg-eden-green-light/30 mb-6">
                <p className="text-lg text-foreground mb-2">
                  For detailed fee structure and payment options, please contact us directly.
                </p>
                <p className="text-muted-foreground">
                  We offer flexible payment plans to accommodate all families.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Call us</div>
                    <div className="font-medium text-foreground">+250 788 000 000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email us</div>
                    <div className="font-medium text-foreground">info@littleedenschool.rw</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today to begin the enrollment process or schedule a school visit.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;

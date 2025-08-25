import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink, GraduationCap, Briefcase, Award, CalendarDays } from "lucide-react";

const experienceData = {
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "JIS College of Engineering, Kalyani (MAKAUT)",
      duration: "2021 – 2025",
      details: "CGPA: 9.01 (till 5th sem)"
    },
    {
      degree: "Higher Secondary (Class 12)",
      institution: "Kanchrapara Harnett High School",
      duration: "2021",
      details: "Percentage: 86.8%"
    },
  ],
  experience: [
    {
      role: "Web Development & Designing Intern",
      company: "The Sparks Foundation",
      duration: "June 2023 - July 2023",
      details: "Developed a Basic Banking System website enabling transactions between dummy users, focusing on frontend and backend integration."
    }
  ],
  certifications: [
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      link: "#"
    },
    {
      name: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      link: "#"
    }
  ]
};

const SectionIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="bg-primary/10 p-2 rounded-md">
    <Icon className="h-6 w-6 text-primary" />
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl [font-size:clamp(2rem,4vw,2.75rem)]">
            My Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Education, experience, and certifications that have shaped my path.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <SectionIcon icon={GraduationCap} />
                <CardTitle className="font-headline">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {experienceData.education.map((edu, index) => (
                <div key={index} className="group relative pl-8">
                  <div className="absolute left-0 top-1.5 h-full w-px bg-border transition-colors group-hover:bg-primary group-hover:shadow-[0_0_8px_0px_hsl(var(--primary))]"></div>
                  <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-stone-500">{edu.details}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <SectionIcon icon={Briefcase} />
                <CardTitle className="font-headline">Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
            {experienceData.experience.map((exp, index) => (
                <div key={index} className="group relative pl-8">
                  <div className="absolute left-0 top-1.5 h-full w-px bg-border transition-colors group-hover:bg-primary group-hover:shadow-[0_0_8px_0px_hsl(var(--primary))]"></div>
                  <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.details}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <SectionIcon icon={Award} />
                <CardTitle className="font-headline">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
            {experienceData.certifications.map((cert, index) => (
                <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-1 h-full w-px bg-border transition-colors group-hover:bg-primary group-hover:shadow-[0_0_8px_0px_hsl(var(--primary))]"></div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center">
                      {cert.name}
                      <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

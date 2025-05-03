import { sleep } from "@/lib/utils"
import { PageWrapper } from "../pageWrapper"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function About() {
  await sleep(1000)

  return (
    <PageWrapper>
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional Resume</h1>
            <p className="text-muted-foreground max-w-2xl">
              Full-stack developer with over 6 years of experience building web applications and enterprise solutions.
              Specialized in JavaScript, React, and modern web technologies.
            </p>
          </div>
          <Button asChild className="flex items-center gap-2">
            <a href="/cv/alisina.pdf" download="alisina.pdf" target="_blank" rel="noopener noreferrer">
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">💼</span>
                </span>
                Work Experience
              </h2>

              <div className="space-y-8">
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-bold text-lg">Software Engineer</h3>
                      <div className="text-muted-foreground">Mar 2024 - Present</div>
                    </div>
                    <div className="text-muted-foreground mb-4">Virgina-United States Remote</div>
                    <p className="mb-4">
                      I'm currently building a full-stack educational platform dedicated to empowering Afghan girls through accessible online learning.
                      🎓 Empowering the future of education with an integrated platform designed to support a holistic online learning experience. Our platform provides:
                      🌐 Social Media Integration: Enabling seamless interaction and community-building among students, teachers, and staff.

                      💬 Real-Time Chat Application: Facilitating instant communication for collaboration, feedback, and discussions.
                      🗂️ Class Management: Streamlining course creation, scheduling, and content delivery, ensuring an efficient learning process.
                      📊 Staff Dashboards: Offering administrative tools for monitoring progress, performance tracking, and user management.
                      👥 Social Interaction: Fostering a vibrant learning community where students can connect, collaborate, and grow together.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">Next Js</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">Shadcn UI</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">Spring Boot (API)</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-bold text-lg">Full Stack Developer</h3>
                      <div className="text-muted-foreground">Feb 2022 - Present</div>
                    </div>
                    <div className="text-muted-foreground mb-4">Kabul, Afghanistan</div>
                    <p className="mb-4">
                      I develop and implement an inventory management system for the Government of Afghanistan using
                      Odoo ERP. This involves designing and customizing the ERP solution to meet the specific needs of
                      the government sector, ensuring efficient and effective inventory tracking and management.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">Odoo ERP</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-l-4 border-l-primary/70">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-bold text-lg">Full Stack Developer</h3>
                      <div className="text-muted-foreground">Jan 2019 - Feb 2022</div>
                    </div>
                    <div className="text-muted-foreground mb-4">Kabul, Afghanistan</div>
                    <p className="mb-4">
                      I was responsible for designing, developing, and implementing government entities, working with
                      image processing of Identity cards, and developing Property registration systems for government
                      employees.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Image Processing</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-l-4 border-l-primary/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-bold text-lg">Web Designer</h3>
                      <div className="text-muted-foreground">Jan 2018 - Dec 2018</div>
                    </div>
                    <div className="text-muted-foreground mb-4">Kabul, Afghanistan</div>
                    <p className="mb-4">
                      I was responsible to develop websites, and in a short time, I developed three websites for this
                      company.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">HTML/CSS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">WordPress</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-l-4 border-l-primary/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-bold text-lg">Software Developer</h3>
                      <div className="text-muted-foreground">Oct 2016 - Jan 2018</div>
                    </div>
                    <div className="text-muted-foreground mb-4">Kabul, Afghanistan</div>
                    <p className="mb-4">
                      I was responsible for designing, developing, and analyzing the leave request management system and
                      employee report management system in Parliament House.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">jQuery</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">🎓</span>
                </span>
                Education
              </h2>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="font-bold text-lg">Bachelor of Computer Science</h3>
                    <div className="text-muted-foreground">2013 - 2016</div>
                  </div>
                  <p>Kabul Polytechnic University</p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">🛠️</span>
                </span>
                Skills
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Python</Badge>
                    <Badge>PHP</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Redux</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>HTML/CSS</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Strapi</Badge>
                    <Badge>REST API</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MongoDB</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>MySQL</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Odoo ERP</Badge>
                    <Badge>Agile/Scrum</Badge>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">📞</span>
                </span>
                Contact
              </h2>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="flex items-center gap-2">
                    <span className="text-primary">📧</span>
                    <a href="mailto:alisina123kpu@gmail.com" className="hover:text-primary transition-colors">
                      alisina123kpu@gmail.com
                    </a>
                  </p>
                  <div className="pt-2">
                    <Button asChild className="w-full">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

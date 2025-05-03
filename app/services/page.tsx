import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { sleep } from "@/lib/utils"
import { PageWrapper } from "../pageWrapper"
import { Check, Code, Globe, Database, Server, Smartphone } from "lucide-react"

export default async function Service() {
  await sleep(1000)
  return (
    <PageWrapper>
      <div className="container py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Services</h1>
          <p className="text-muted-foreground">
            I offer a range of services to help businesses and individuals build modern, responsive, and user-friendly
            web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-md transition-all duration-300 border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Modern, responsive websites built with the latest technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Cross-browser compatibility</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md transition-all duration-300 border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>Interactive user interfaces with modern frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>React.js and Next.js applications</span>
                </li>
             
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Modern UI with Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Animations and interactive elements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md transition-all duration-300 border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>Robust server-side solutions and APIs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Spring Boot </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Python</span>
                </li>
           
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Server-side rendering</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md transition-all duration-300 border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Database Design</CardTitle>
              <CardDescription>Efficient and scalable database solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
           
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>PostgreSQL and SQL databases</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Data modeling and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Database migration and maintenance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md transition-all duration-300 border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Mobile-First Development</CardTitle>
              <CardDescription>Optimized experiences for mobile devices</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Responsive mobile-first design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Progressive Web Apps (PWA)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Touch-friendly interfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Mobile performance optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md transition-all duration-300 border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Custom Web Applications</CardTitle>
              <CardDescription>Tailored solutions for specific business needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>CRM and ERP systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>E-commerce platforms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Content management systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Custom business applications</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="flex flex-col border border-muted hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Basic</CardTitle>
                <div className="text-4xl font-bold text-center my-4">
                  $90<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <CardDescription className="text-center">For simple applications and websites</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Single page website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Basic SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Contact form</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>

            <Card className="flex flex-col relative border-primary shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Standard</CardTitle>
                <div className="text-4xl font-bold text-center my-4">
                  $150<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <CardDescription className="text-center">For business websites and applications</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Multi-page website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Advanced responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Full SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Content management system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Social media integration</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>

            <Card className="flex flex-col border border-muted hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Premium</CardTitle>
                <div className="text-4xl font-bold text-center my-4">
                  $200<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <CardDescription className="text-center">For complex applications and systems</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Custom web application</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Advanced features and functionality</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Database integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>User authentication</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>API development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Ongoing support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

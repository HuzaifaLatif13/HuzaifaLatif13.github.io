import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import React from "react";

export default function Portfolio() {
  // Navigation links data
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Lab", href: "#lab" },
  ];

  // Work experience card data
  const workExperienceCards = [
    {
      id: 1,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      icon: "group1898",
    },
    {
      id: 2,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      icon: "group1935",
    },
    {
      id: 3,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      icon: "group1938",
    },
    {
      id: 4,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      icon: "icons",
    },
  ];

  // Project data
  const projects = [
    {
      id: 1,
      title: "Example Project",
      featured: true,
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      id: 2,
      title: "Example Project",
      featured: true,
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1980px] relative">
        {/* Background images - using empty divs with background styling for placeholders */}
        <div className="absolute w-full h-[4400px] top-0 left-0">
          <div className="absolute w-full h-[4298px] top-[102px] left-0 bg-[#0f0817]" />

          {/* Gradient elements */}
          <div className="absolute w-[642px] h-[720px] top-[2580px] left-[858px] bg-purple-900/30 rounded-full blur-3xl" />
          <div className="absolute w-[625px] h-[700px] top-[1022px] left-[739px] bg-purple-900/30 rounded-full blur-3xl" />
          <div className="absolute w-[625px] h-[700px] top-[2571px] left-[1084px] bg-purple-900/30 rounded-full blur-3xl" />
          <div className="absolute w-[572px] h-[641px] top-[3166px] left-[274px] bg-purple-900/30 rounded-full blur-3xl" />
          <div className="absolute w-[385px] h-[431px] top-[220px] left-[385px] bg-purple-900/30 rounded-full blur-3xl" />
        </div>

        {/* Header/Navigation */}
        <header className="absolute w-full h-[138px] top-0 left-0 bg-[#0f0817] z-10">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[35px] h-[43px]">
                <img src="" alt="Logo" className="w-full h-full" />
              </div>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="[font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-xl text-center tracking-[0.40px] text-white"
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-[200px] container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3">
              <Avatar className="w-[258px] h-[259px] mx-auto md:mx-0">
                <AvatarImage src="" alt="Ibrahim Memon" />
                <AvatarFallback className="bg-purple-900/20">IM</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:w-2/3 mt-8 md:mt-0">
              <p className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[19px] text-center md:text-left tracking-[-0.50px] mb-4">
                Hello! I Am{" "}
                <span className="text-[#7127ba]">Ibrahim Memon</span>
              </p>

              <p className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-[17px] text-center md:text-left tracking-[0.34px] text-white underline mb-2">
                A Designer who
              </p>

              <h1 className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-[50px] tracking-[1.00px] leading-[63.3px] mb-4">
                <span className="text-white tracking-[0.50px]">
                  Judges a book
                  <br />
                  by its{" "}
                </span>
                <span className="text-[#7127ba] tracking-[0.50px]">cover</span>
                <span className="text-white tracking-[0.50px]">...</span>
              </h1>

              <p className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0.22px] mb-16">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[50px] tracking-[1.00px] mb-4">
              I'm a Software Engineer.|
            </h2>

            <div className="flex justify-center items-center mb-8">
              <p className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0.42px]">
                Currently, I'm a Software Engineer at&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-[#1877f2]">Facebook</span>,
              </p>
              <img src="" alt="" className="w-5 h-[21px] ml-2" />
            </div>

            <p className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0.44px] max-w-[892px] mx-auto">
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now.
              <br />I make meaningful and delightful digital products that
              create an equilibrium
              <br />
              between user needs and business goals.
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="relative mt-32 container mx-auto px-4">
          <h2 className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0.80px] mb-12">
            Work Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperienceCards.map((card) => (
              <Card
                key={card.id}
                className="w-full rounded-[15px] shadow-[4px_7px_26px_#0000001f] bg-gradient-to-b from-[rgb(19.08,3.87,40.37)] via-[rgb(55.97,17.78,109.44)] to-[rgb(25.36,6.29,52.06)] border-none"
              >
                <CardContent className="p-6 flex items-center">
                  <div className="w-[120px] h-[100px] flex items-center justify-center">
                    <img
                      src=""
                      alt={card.icon}
                      className="max-w-full max-h-full"
                    />
                  </div>

                  <div className="ml-6">
                    <h3 className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[26px] leading-[32.5px]">
                      {card.title}
                    </h3>

                    <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[8px] leading-[10.5px] mt-1">
                      {card.description}
                    </p>

                    <Button className="mt-4 h-[33px] rounded-md bg-transparent border border-white/30 hover:bg-white/10">
                      <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[10px] text-center">
                        LEARN MORE
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative mt-32 container mx-auto px-4">
          <div className="flex justify-center">
            <img src="" alt="Skills" className="max-w-full" />
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative mt-32 container mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-24`}
            >
              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
              >
                <div className="mb-6">
                  <Badge className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#9757d3] text-base tracking-[0.32px] bg-transparent">
                    Featured&nbsp;&nbsp;Project
                  </Badge>

                  <h3 className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#ccd6f6] text-[34px] tracking-[0.68px] mt-2">
                    {project.title}
                  </h3>
                </div>

                <Card className="bg-[#112240]/80 border-none rounded-md shadow-lg">
                  <CardContent className="p-8">
                    <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#ccd6f6] text-lg">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>

                <div className="flex mt-4 gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-[31px] h-[31px] p-0"
                  >
                    <Github className="w-5 h-5 text-[#ccd6f6]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-[31px] h-[31px] p-0"
                  >
                    <ExternalLink className="w-5 h-5 text-[#ccd6f6]" />
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img
                  src=""
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="relative mt-32 container mx-auto px-4 pb-16">
          <h2 className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[25px] tracking-[0.50px] mb-8">
            Contact
          </h2>

          <p className="[font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0.30px] mb-8 max-w-[600px]">
            I'm currently looking to join a cross-functional team that values
            improving people's lives
            <br />
            through accessible design. or have a project in mind? Let's connect.
            <br />
            <br />
            ibrhaimmemon930@gmail.com
          </p>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 p-0"
            >
              <Twitter className="w-4 h-4 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 p-0"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 p-0"
            >
              <Github className="w-4 h-4 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 p-0"
            >
              <Instagram className="w-4 h-4 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-8 h-8 p-0"
            >
              <Mail className="w-4 h-4 text-white" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

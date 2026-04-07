
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";


function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
      </div>

      {/* GLOW ORBS */}
      <div className="absolute top-20 left-1/4 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div className="space-y-5">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <span className="text-xs font-medium text-primary">
                  AI-Powered Dental Assistant
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-foreground">
                  Your dental
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent animate-gradient-x">
                  questions
                </span>
                <br />
                <span className="text-foreground/80">
                  answered instantly
                </span>
              </h1>

              {/* SUBTEXT */}
              <p className="text-base text-muted-foreground max-w-lg">
                Chat with our AI assistant, get instant advice, and book appointments effortlessly.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3">
                <SignUpButton mode="modal">
                  <Button className="group">
                    <MicIcon className="mr-2 size-4 group-hover:scale-110 transition" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button variant="outline" className="group">
                    <CalendarIcon className="mr-2 size-4 group-hover:scale-110 transition" />
                    Book
                  </Button>
                </SignUpButton>
              </div>

              {/* TESTIMONIAL */}
              <div className="pt-4 flex items-center gap-4 flex-wrap">

                {/* AVATARS */}
                <div className="flex -space-x-2">
                  {[
                    "1544005313-94ddf0286df2",
                    "1560250097-0b93528c311a",
                    "1580489944761-15a19d654956",
                    "1633332755192-727a05c4013d",
                  ].map((id, i) => (
                    <Image
                      key={i}
                      src={`https://images.unsplash.com/photo-${id}?w=100&h=100&fit=crop&crop=face`}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full ring-2 ring-background hover:scale-110 transition"
                    />
                  ))}
                </div>

                {/* RATING */}
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-semibold ml-1">4.9</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    1,200+ patients
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              
              {/* FLOATING GLOW */}
              <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>

              <Image
                src="/hero.png"
                alt="DentWise AI"
                width={450}
                height={450}
                className="w-[85%] max-w-md animate-float drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
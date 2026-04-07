import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section className="relative py-20 px-6 z-10 max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 mb-5">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Simple Process</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Our streamlined process makes dental care accessible and stress-free.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden lg:block"></div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ask Questions",
              desc: "Chat with AI and get instant dental answers.",
              img: "/audio.png",
              tags: ["24/7", "Instant"],
            },
            {
              title: "Get Expert Advice",
              desc: "Personalized insights powered by AI.",
              img: "/brain.png",
              tags: ["AI", "Personalized"],
            },
            {
              title: "Book & Get Care",
              desc: "Schedule dentists and track progress.",
              img: "/calendar.png",
              tags: ["Verified", "Follow-up"],
            },
          ].map((step, i) => (
            <div key={i} className="relative group">
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">

                {/* NUMBER */}
                <div className="absolute -top-3 left-6 w-7 h-7 text-sm bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>

                {/* ICON */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Image src={step.img} alt="" width={32} height={32} />
                </div>

                <h3 className="text-xl font-semibold text-center mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground text-center mb-5">
                  {step.desc}
                </p>

                {/* TAGS */}
                <div className="flex justify-center gap-2 flex-wrap">
                  {step.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <SignUpButton mode="modal">
          <Button size="default">
            <ArrowRightIcon className="mr-2 size-5" />
            Get started
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
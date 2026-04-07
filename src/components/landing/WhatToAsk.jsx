import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/10 mb-4">
            <MessageCircleIcon className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">
              AI-Powered Conversations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Ask about</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From simple questions to complex concerns, our AI delivers expert-level guidance.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT - CHAT */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold mb-4">
              Common questions our AI answers:
            </h3>

            {[
              {
                q: "My tooth hurts when I bite down",
                d: "Get advice on pain causes and when to see a dentist.",
                tags: ["Instant", "Relief"],
              },
              {
                q: "How much does teeth whitening cost?",
                d: "Compare options, pricing, and best solutions.",
                tags: ["Cost", "Options"],
              },
              {
                q: "When should I replace my filling?",
                d: "Learn lifespan and warning signs for replacement.",
                tags: ["Care", "Maintenance"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-card/80 backdrop-blur-xl rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquareIcon className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="bg-primary/5 rounded-xl px-3 py-2 border border-primary/10">
                      <p className="text-sm font-medium text-primary">
                        "{item.q}"
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      {item.d}
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/confused.png"
              alt="AI Assistant"
              width={420}
              height={420}
              className="w-[80%] max-w-sm animate-float"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;
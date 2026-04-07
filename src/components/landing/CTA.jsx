import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicIcon, CalendarIcon } from "lucide-react";

function CTA() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-muted/10 via-background to-muted/5">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-primary">Ready When You Are</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your dental health
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  journey starts here
                </span>
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                Join 1,200+ patients who trust our AI for instant guidance and personalized care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="px-5 py-3 font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
              >
                <MicIcon className="mr-2 h-4 w-4" />
                Start free chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-5 py-3 font-semibold border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 rounded-xl"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book appointment
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT - IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">
              {/* Floating Badge */}
              <div className="absolute -top-3 left-3 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow z-10 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                Available 24/7
              </div>

              {/* Main Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl scale-105"></div>
                <Image
                  src="/cta.png"
                  alt="DentWise AI Assistant"
                  width={280}
                  height={280}
                  className="relative w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Decorative Blur */}
              <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-lg"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;
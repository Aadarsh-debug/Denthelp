import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";

function PricingSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-background via-muted/5 to-background">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/10 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-primary">Simple Pricing</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Choose your</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              AI dental plan
            </span>
          </h2>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Book appointments for free or upgrade for AI consultations.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* FREE */}
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition">
            <h3 className="text-lg font-semibold mb-2">Free</h3>
            <p className="text-3xl font-bold mb-1">$0</p>
            <p className="text-xs text-muted-foreground mb-4">/month</p>

            <SignUpButton mode="modal">
              <Button className="w-full mb-4" variant="secondary">
                Get Started
              </Button>
            </SignUpButton>

            <div className="space-y-3 text-sm">
              {[
                "Appointment booking",
                "Find nearby dentists",
                "Basic chat support",
                "Reminders",
              ].map((item, i) => (
                <div key={i} className="flex gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-primary mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI BASIC */}
          <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-primary/30 shadow-md scale-[1.03]">
            
            {/* BADGE */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
              Popular
            </div>

            <h3 className="text-lg font-semibold mb-2">AI Basic</h3>
            <p className="text-3xl font-bold text-primary mb-1">$9</p>
            <p className="text-xs text-muted-foreground mb-4">/month</p>

            <Button className="w-full mb-4">
              Start Plan
            </Button>

            <div className="space-y-3 text-sm">
              {[
                "Everything in Free",
                "10 AI voice calls",
                "Dental advice",
                "Symptom check",
                "Priority support",
              ].map((item, i) => (
                <div key={i} className="flex gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-primary mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI PRO */}
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition">
            <h3 className="text-lg font-semibold mb-2">AI Pro</h3>
            <p className="text-3xl font-bold mb-1">$19</p>
            <p className="text-xs text-muted-foreground mb-4">/month</p>

            <Button variant="outline" className="w-full mb-4">
              Upgrade
            </Button>

            <div className="space-y-3 text-sm">
              {[
                "Everything in Basic",
                "Unlimited AI calls",
                "Advanced analysis",
                "Care plans",
                "24/7 AI support",
              ].map((item, i) => (
                <div key={i} className="flex gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-primary mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PricingSection;
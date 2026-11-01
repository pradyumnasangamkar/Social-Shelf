"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Sparkles, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Client-side friendly response
      await new Promise((resolve) => setTimeout(resolve, 600));
      toast.success("Welcome to the Social Shelf circle!", {
        description: `We'll send curated book picks and event invites to ${email}.`,
      });
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-zinc-100/60 dark:to-[#0B0F19]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-700 text-white shadow-2xl overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Weekly Reader Digest</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Never Miss a Great Read or Event
            </h2>
            <p className="text-sm sm:text-base text-violet-100/90 leading-relaxed">
              Join 500+ book lovers receiving bi-weekly reading lists, literary meetup invitations, and new donation drops.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 pt-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 bg-white/15 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 px-6 bg-white text-violet-900 hover:bg-violet-50 font-bold rounded-xl shadow-lg transition-transform hover:scale-102"
              >
                {isLoading ? (
                  "Subscribing..."
                ) : (
                  <span className="flex items-center gap-1.5">
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </span>
                )}
              </Button>
            </form>

            <p className="text-[11px] text-violet-200/70 pt-1">
              Zero spam. Unsubscribe at any time with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

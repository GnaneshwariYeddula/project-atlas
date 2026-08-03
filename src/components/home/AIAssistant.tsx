import Link from "next/link";
import { Bot, Sparkles, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function AIAssistant() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-white/10 p-12 backdrop-blur-xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full bg-white/20 p-4">
                <Bot
                  size={40}
                  className="text-white"
                />
              </div>

              <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black">
                AI Powered
              </span>

              <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
                Your Personal
                <br />
                Archaeology Assistant
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-indigo-100">
                Ask questions about civilizations, archaeological sites,
                historical events, famous artifacts, excavation techniques,
                timelines and much more.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/ai">
                  <Button>
                    Start Chat
                    <ArrowRight
                      className="ml-2"
                      size={18}
                    />
                  </Button>
                </Link>

                <Link href="/about">
                  <Button variant="secondary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-[30px] bg-white p-8 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-indigo-700 p-3 text-white">
                    <Bot size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Atlas AI
                    </h3>

                    <p className="text-sm text-green-600">
                      Online
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl bg-stone-100 p-4">
                    Tell me about the Indus Valley Civilization.
                  </div>

                  <div className="rounded-2xl bg-indigo-700 p-4 text-white">
                    The Indus Valley Civilization flourished between
                    3300 BCE and 1300 BCE and is known for its advanced
                    city planning, drainage systems and trade.
                  </div>

                  <div className="flex items-center gap-2 text-indigo-700">
                    <Sparkles size={18} />
                    AI is typing...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
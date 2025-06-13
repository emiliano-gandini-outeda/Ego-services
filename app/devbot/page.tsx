import Link from "next/link"

export default function DevBotPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  DB
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">devBot</h1>
                  <p className="text-xl text-red-600 font-semibold">Advanced Discord Community Management Solution</p>
                </div>
              </div>

              <p className="max-w-[600px] text-gray-500 md:text-xl">
                A comprehensive Discord bot specifically designed for open source communities, developer teams, and
                project maintainers. devBot streamlines community management through intelligent automation, advanced
                ticketing systems, and powerful productivity tools that scale with community growth.
              </p>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  Get Started Today
                </Link>
                <Link
                  href="https://github.com/emiliano-gandini-outeda/devbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  View on GitHub
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="w-64 h-64 bg-red-600/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-red-600/40 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                      DB
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Core Features</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced Ticket System",
                description: "Professional support ticketing with privacy controls and workflow automation.",
              },
              {
                title: "Workflow Automation",
                description: "Create custom automated responses and moderation workflows.",
              },
              {
                title: "GitHub Integration",
                description: "Seamless integration with GitHub repositories for project management.",
              },
              {
                title: "Meeting Scheduler",
                description: "Coordinate team meetings and community events efficiently.",
              },
              {
                title: "Conversation Management",
                description: "Advanced tools for organizing and managing community discussions.",
              },
              {
                title: "Privacy & Security",
                description: "Comprehensive data protection and user privacy controls.",
              },
            ].map((feature, i) => (
              <div key={i} className="rounded-lg border bg-white dark:bg-gray-900 shadow-sm p-6 dark:border-gray-800">
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Transform Your Community Management?
            </h2>
            <p className="text-gray-500 md:text-xl max-w-2xl mx-auto">
              Join the growing number of communities using devBot to streamline their operations and enhance member
              engagement.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

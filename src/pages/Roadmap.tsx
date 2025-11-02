import { useEffect } from "react";

// Helper function to convert backticks to code tags
function formatTextWithCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      const codeContent = part.slice(1, -1);
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded text-xs font-mono"
        >
          {codeContent}
        </code>
      );
    }
    return part;
  });
}

export default function Roadmap() {
  useEffect(() => {
    document.title = "Roadmap | MOSF";
  }, []);

  const roadmap = [
    {
      month: "Nov 2025",
      focus: "Finalize Stage 0 setup & public outreach",
      objectives: [
        "Continue board recruitment (Secretary & Treasurer)",
        "Maintain \"in formation\" transparency across channels",
        "Prepare Google Form for board applicants",
      ],
      deliverables: [
        "✅ Board prospect packet published",
        "✅ Interest form live",
        "✅ First LinkedIn updates",
      ],
    },
    {
      month: "Dec 2025",
      focus: "Incorporation readiness",
      objectives: [
        "Await WA State approval",
        "Prepare EIN application draft",
        "Review final bylaws and policies",
        "Map governance repos for public release",
      ],
      deliverables: [
        "✅ Articles & bylaws reviewed",
        "✅ EIN draft details ready",
        "✅ `mosf-policies` repo scaffold created",
      ],
    },
    {
      month: "Jan 2026",
      focus: "Official formation & first board meeting",
      objectives: [
        "Receive WA approval → apply for EIN",
        "Hold first board meeting",
        "Elect officers (President, Secretary, Treasurer)",
        "Approve domain transfer",
      ],
      deliverables: [
        "✅ EIN issued",
        "✅ Signed minutes & officer roster",
        "✅ Domain ownership under MOSF",
      ],
    },
    {
      month: "Feb 2026",
      focus: "IRS 1023-EZ & compliance setup",
      objectives: [
        "File Form 1023-EZ",
        "File WA charitable registration",
        "Create transparency page on site",
        "Publish core governance docs",
      ],
      deliverables: [
        "✅ IRS submission receipt",
        "✅ \"Transparency\" web page",
        "✅ Public `mosf-policies` repo complete",
      ],
    },
    {
      month: "Mar 2026",
      focus: "Website internationalization",
      objectives: [
        "Add Arabic translation to key pages (mission, vision, contact)",
        "Implement language switcher UI in Vite + React",
        "Begin testing layout for RTL support",
      ],
      deliverables: [
        "✅ Arabic localization live",
        "✅ i18n config documented",
        "✅ Arabic review by native speaker",
      ],
    },
    {
      month: "Apr 2026",
      focus: "Curriculum architecture for first project",
      objectives: [
        "Outline structure for \"Learn Arabic: Level 1\"",
        "Define lesson units & learning objectives",
        "Select audio and visual assets licensing approach",
      ],
      deliverables: [
        "✅ Project plan `learn-arabic` repo",
        "✅ Curriculum outline v1",
        "✅ Contributor roles defined",
      ],
    },
    {
      month: "May 2026",
      focus: "Pilot app design & prototype",
      objectives: [
        "Build React prototype (front-end only)",
        "Implement basic progress tracking",
        "Publish early preview for feedback",
      ],
      deliverables: [
        "✅ Live demo on GitHub Pages",
        "✅ Feedback form linked",
        "✅ Blog update: \"Designing Our First App\"",
      ],
    },
    {
      month: "Jun 2026",
      focus: "Backend & content integration",
      objectives: [
        "Add Node/.NET API for lesson data",
        "Integrate audio pronunciations and transliteration",
        "Localize UI for Arabic terms",
      ],
      deliverables: [
        "✅ API v1 online",
        "✅ Arabic audio set curated",
        "✅ Localization QA complete",
      ],
    },
    {
      month: "Jul 2026",
      focus: "Community & contributor growth",
      objectives: [
        "Recruit volunteer developers and Arabic educators",
        "Host first virtual intro session",
        "Document onboarding guide",
      ],
      deliverables: [
        "✅ 5–10 contributors onboarded",
        "✅ Recorded intro call posted",
        "✅ CONTRIBUTING.md finalized",
      ],
    },
    {
      month: "Aug 2026",
      focus: "Alpha release & testing",
      objectives: [
        "Launch \"Learn Arabic: Level 1 Alpha\"",
        "Collect user feedback and bug reports",
        "Begin curriculum review for Level 2",
      ],
      deliverables: [
        "✅ Alpha tag released",
        "✅ Issue tracker organized",
        "✅ Level 2 draft outline",
      ],
    },
    {
      month: "Sep 2026",
      focus: "Public launch & engagement",
      objectives: [
        "Officially announce MOSF and app launch (assuming 501(c)(3) approval by now)",
        "Hold online event introducing project and mission",
        "Open translation volunteering for additional languages (Urdu, Bahasa)",
      ],
      deliverables: [
        "✅ Launch event held (50 attendees target)",
        "✅ Press kit page on site",
        "✅ Urdu translation started",
      ],
    },
    {
      month: "Oct 2026",
      focus: "Annual reporting & next-year planning",
      objectives: [
        "Publish first annual report (activities + finances)",
        "Conduct board review and re-elections",
        "Define 2027 objectives (Level 2 curriculum, more languages, new apps)",
      ],
      deliverables: [
        "✅ Annual Report PDF in `mosf-policies`",
        "✅ Board minutes and goals for 2027",
        "✅ Updated roadmap posted",
      ],
    },
  ];

  const ongoingWorkstreams = [
    "Governance & Compliance: Maintain policies, minutes, and filings.",
    "Technical Quality: Apply linting, testing, and accessibility standards across repos.",
    "Community Relations: Respond to contributors, run quarterly check-ins, share dev updates.",
    "Islamic Alignment: Ensure all educational material reflects sound linguistic and ethical sources.",
    "Localization & Accessibility: Expand beyond Arabic to additional languages as capacity grows.",
  ];

  const endOfCycleOutcomes = [
    "MOSF legally established with 501(c)(3) status.",
    "Multilingual website live (English + Arabic).",
    "\"Learn Arabic: Level 1\" app publicly released with active users.",
    "Early translation volunteers for Urdu and Bahasa Indonesia onboarded.",
    "Transparent governance repos + first annual report published.",
    "Clear 2027 plan for scaling curriculum and new educational projects.",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Muslim Open Source Foundation
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Rolling 12-Month Roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This roadmap outlines our month-by-month objectives over the next 12 months (Nov 2025 → Oct 2026). As a rolling roadmap, it will be updated monthly to maintain a forward-looking 12-month view as we transition from formation to active operations and our first open-source project.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-blue-200 dark:border-blue-800 pb-2">
            Monthly Goals
          </h2>
          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg">
                      {item.month}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.focus}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          📘 Objectives
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                          {item.objectives.map((obj, i) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          📄 Deliverables
                        </h4>
                        <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                          {item.deliverables.map((del, i) => (
                            <li key={i}>{formatTextWithCode(del)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-500 p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🔁 Ongoing Workstreams (All Year)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {ongoingWorkstreams.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-blue-200 dark:border-blue-800 pb-2">
            📈 Expected Outcomes (Oct 2026)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            As this is a rolling 12-month roadmap, these outcomes represent targets for October 2026. The roadmap will be updated monthly to reflect the next 12-month period.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            {endOfCycleOutcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            This is a rolling 12-month roadmap that will be updated monthly. As each month passes, the roadmap will be refreshed to maintain a forward-looking 12-month window, allowing us to adapt to actual progress, board decisions, and external factors. Last updated: November 2025.
          </p>
        </section>
      </main>
    </div>
  );
}


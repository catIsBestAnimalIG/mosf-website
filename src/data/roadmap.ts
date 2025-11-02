import { formatDateLong } from "../utils/dateUtils";

export interface CompletedItem {
  text: string;
  completedDate: string; // ISO date format: YYYY-MM-DD
}

export interface RoadmapItem {
  month: string;
  year: number; // For easy filtering
  monthNumber: number; // 1-12 for sorting
  focus: string;
  objectives: {
    text: string;
    completedDate?: string; // ISO date format: YYYY-MM-DD
  }[];
  deliverables: {
    text: string;
    completedDate?: string; // ISO date format: YYYY-MM-DD
  }[];
}

export const roadmap: RoadmapItem[] = [
  {
    month: "Nov 2025",
    year: 2025,
    monthNumber: 11,
    focus: "Finalize Stage 0 setup & public outreach",
    objectives: [
      {
        text: "Continue board recruitment (Secretary & Treasurer)",
      },
      {
        text: 'Maintain "in formation" transparency across channels',
      },
      {
        text: "Prepare Google Form for board applicants",
        completedDate: "2025-11-02",
      },
    ],
    deliverables: [
      {
        text: "Board prospect packet published",
        completedDate: "2025-11-02",
      },
      {
        text: "Interest form live",
        completedDate: "2025-11-02",
      },
      {
        text: "First LinkedIn updates",
        completedDate: "2025-11-02",
      },
    ],
  },
  {
    month: "Dec 2025",
    year: 2025,
    monthNumber: 12,
    focus: "Incorporation readiness",
    objectives: [
      {
        text: "Await WA State approval",
      },
      {
        text: "Prepare EIN application draft",
      },
      {
        text: "Review final bylaws and policies",
      },
      {
        text: "Map governance repos for public release",
      },
    ],
    deliverables: [
      {
        text: "Articles & bylaws reviewed",
      },
      {
        text: "EIN draft details ready",
      },
      {
        text: "`mosf-policies` repo scaffold created",
      },
    ],
  },
  {
    month: "Jan 2026",
    year: 2026,
    monthNumber: 1,
    focus: "Official formation & first board meeting",
    objectives: [
      {
        text: "Receive WA approval → apply for EIN",
      },
      {
        text: "Hold first board meeting",
      },
      {
        text: "Elect officers (President, Secretary, Treasurer)",
      },
      {
        text: "Approve domain transfer",
      },
    ],
    deliverables: [
      {
        text: "EIN issued",
      },
      {
        text: "Signed minutes & officer roster",
      },
      {
        text: "Domain ownership under MOSF",
      },
    ],
  },
  {
    month: "Feb 2026",
    year: 2026,
    monthNumber: 2,
    focus: "IRS 1023-EZ & compliance setup",
    objectives: [
      {
        text: "File Form 1023-EZ",
      },
      {
        text: "File WA charitable registration",
      },
      {
        text: "Create transparency page on site",
      },
      {
        text: "Publish core governance docs",
      },
    ],
    deliverables: [
      {
        text: "IRS submission receipt",
      },
      {
        text: '"Transparency" web page',
      },
      {
        text: "Public `mosf-policies` repo complete",
      },
    ],
  },
  {
    month: "Mar 2026",
    year: 2026,
    monthNumber: 3,
    focus: "Website internationalization",
    objectives: [
      {
        text: "Add Arabic translation to key pages (mission, vision, contact)",
      },
      {
        text: "Implement language switcher UI in Vite + React",
      },
      {
        text: "Begin testing layout for RTL support",
      },
    ],
    deliverables: [
      {
        text: "Arabic localization live",
      },
      {
        text: "i18n config documented",
      },
      {
        text: "Arabic review by native speaker",
      },
    ],
  },
  {
    month: "Apr 2026",
    year: 2026,
    monthNumber: 4,
    focus: "Curriculum architecture for first project",
    objectives: [
      {
        text: 'Outline structure for "Learn Arabic: Level 1"',
      },
      {
        text: "Define lesson units & learning objectives",
      },
      {
        text: "Select audio and visual assets licensing approach",
      },
    ],
    deliverables: [
      {
        text: "Project plan `learn-arabic` repo",
      },
      {
        text: "Curriculum outline v1",
      },
      {
        text: "Contributor roles defined",
      },
    ],
  },
  {
    month: "May 2026",
    year: 2026,
    monthNumber: 5,
    focus: "Pilot app design & prototype",
    objectives: [
      {
        text: "Build React prototype (front-end only)",
      },
      {
        text: "Implement basic progress tracking",
      },
      {
        text: "Publish early preview for feedback",
      },
    ],
    deliverables: [
      {
        text: "Live demo on GitHub Pages",
      },
      {
        text: "Feedback form linked",
      },
      {
        text: 'Blog update: "Designing Our First App"',
      },
    ],
  },
  {
    month: "Jun 2026",
    year: 2026,
    monthNumber: 6,
    focus: "Backend & content integration",
    objectives: [
      {
        text: "Add Node/.NET API for lesson data",
      },
      {
        text: "Integrate audio pronunciations and transliteration",
      },
      {
        text: "Localize UI for Arabic terms",
      },
    ],
    deliverables: [
      {
        text: "API v1 online",
      },
      {
        text: "Arabic audio set curated",
      },
      {
        text: "Localization QA complete",
      },
    ],
  },
  {
    month: "Jul 2026",
    year: 2026,
    monthNumber: 7,
    focus: "Community & contributor growth",
    objectives: [
      {
        text: "Recruit volunteer developers and Arabic educators",
      },
      {
        text: "Host first virtual intro session",
      },
      {
        text: "Document onboarding guide",
      },
    ],
    deliverables: [
      {
        text: "5-10 contributors onboarded",
      },
      {
        text: "Recorded intro call posted",
      },
      {
        text: "CONTRIBUTING.md finalized",
      },
    ],
  },
  {
    month: "Aug 2026",
    year: 2026,
    monthNumber: 8,
    focus: "Alpha release & testing",
    objectives: [
      {
        text: 'Launch "Learn Arabic: Level 1 Alpha"',
      },
      {
        text: "Collect user feedback and bug reports",
      },
      {
        text: "Begin curriculum review for Level 2",
      },
    ],
    deliverables: [
      {
        text: "Alpha tag released",
      },
      {
        text: "Issue tracker organized",
      },
      {
        text: "Level 2 draft outline",
      },
    ],
  },
  {
    month: "Sep 2026",
    year: 2026,
    monthNumber: 9,
    focus: "Public launch & engagement",
    objectives: [
      {
        text: "Officially announce MOSF and app launch (assuming 501(c)(3) approval by now)",
      },
      {
        text: "Hold online event introducing project and mission",
      },
      {
        text: "Open translation volunteering for additional languages (Urdu, Bahasa)",
      },
    ],
    deliverables: [
      {
        text: "Launch event held (50 attendees target)",
      },
      {
        text: "Press kit page on site",
      },
      {
        text: "Urdu translation started",
      },
    ],
  },
  {
    month: "Oct 2026",
    year: 2026,
    monthNumber: 10,
    focus: "Annual reporting & next-year planning",
    objectives: [
      {
        text: "Publish first annual report (activities + finances)",
      },
      {
        text: "Conduct board review and re-elections",
      },
      {
        text: "Define 2027 objectives (Level 2 curriculum, more languages, new apps)",
      },
    ],
    deliverables: [
      {
        text: "Annual Report PDF in `mosf-policies`",
      },
      {
        text: "Board minutes and goals for 2027",
      },
      {
        text: "Updated roadmap posted",
      },
    ],
  },
];

// Helper function to get all completed items grouped by month/year
export function getCompletedItemsByMonthYear(): Record<string, CompletedItem[]> {
  const grouped: Record<string, CompletedItem[]> = {};

  roadmap.forEach((item) => {
    const monthKey = item.month;

    // Add completed objectives
    item.objectives.forEach((obj) => {
      if (obj.completedDate) {
        if (!grouped[monthKey]) {
          grouped[monthKey] = [];
        }
        grouped[monthKey].push({
          text: obj.text,
          completedDate: obj.completedDate,
        });
      }
    });

    // Add completed deliverables
    item.deliverables.forEach((del) => {
      if (del.completedDate) {
        if (!grouped[monthKey]) {
          grouped[monthKey] = [];
        }
        grouped[monthKey].push({
          text: del.text,
          completedDate: del.completedDate,
        });
      }
    });
  });

  return grouped;
}

// Helper function to format date for display
export function formatCompletionDate(dateString: string): string {
  return formatDateLong(dateString);
}


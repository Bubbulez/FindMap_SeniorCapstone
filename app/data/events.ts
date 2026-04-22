// app/data/events.ts

export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  link?: string;
};

export const events: Event[] = [
  // --- TUESDAY, APRIL 21, 2026 ---
  {
    id: 1,
    title: "A Taste From Around the World",
    date: "Tuesday, April 21, 2026",
    time: "12:00 PM - 4:00 PM",
    location: "MSC Cougar's Den",
    description: "Hosted by the Portuguese Club. Experience cultural traditions through global food samples and music.",
    category: "Social",
    link: "https://kean.campuslabs.com/engage/event/12389290"
  },
  {
    id: 2,
    title: "Career Advisement Drop-Ins",
    date: "Tuesday, April 21, 2026",
    time: "3:00 PM - 4:00 PM",
    location: "Bruce Hall - B101A",
    description: "Quick 15-minute sessions for resume reviews and career advice. No appointment needed.",
    category: "Academic",
    link: "https://career.kean.edu/events/2026/04/21/career-advisement-drop-ins-no-appointment-needed-13/"
  },
  {
    id: 3,
    title: "Rogers 3rd Floor Meeting",
    date: "Tuesday, April 21, 2026",
    time: "5:00 PM - 6:00 PM",
    location: "Rogers Hall 3rd Floor",
    description: "This event is to meet with residents to fill them in with any updates, reminders, and policies for the upcoming spring semester.",
    category: "Academic",
    link: "https://kean.campuslabs.com/engage/event/12057843"
  },
  // --- WEDNESDAY, APRIL 22, 2026 ---
  {
    id: 4,
    title: "Undergraduate Poster Symposium",
    date: "Wednesday, April 22, 2026",
    time: "9:30 AM - 11:00 AM",
    location: "Harwood Arena",
    description: "The highlight of Research Days! Hundreds of undergraduate students showcase their research projects.",
    category: "Academic",
    link: "https://www.kean.edu/research-days"
  },
  {
    id: 5,
    title: "Nu Theta Chi Bake Sale",
    date: "Wednesday, April 22, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "MSC Atrium",
    description: "Support Nu Theta Chi's philanthropic goals with homemade treats and sweets.",
    category: "Social",
    link: "https://kean.campuslabs.com/engage/event/11958433"
  },
  {
    id: 6,
    title: "Future Careers Through Research Panel",
    date: "Wednesday, April 22, 2026",
    time: "1:30 PM - 2:30 PM",
    location: "STEM Atrium (Downstairs)",
    description: "Panel discussion on how student research leads to high-level career opportunities.",
    category: "Academic",
    link: "https://career.kean.edu/events/2026/04/22/future-careers-through-research-panel/"
  },
  {
    id: 7,
    title: "Graduate Poster Symposium",
    date: "Wednesday, April 22, 2026",
    time: "4:30 PM - 6:00 PM",
    location: "Downs Hall",
    description: "Graduate students present advanced research and scholarly discoveries to faculty and peers.",
    category: "Academic",
    link: "https://www.kean.edu/research-days"
  },
  {
    id: 8,
    title: "Kean Dance Theatre Annual Spring 2026 Showcase Step In Time",
    date: "Wednesday, April 22, 2026",
    time: "7:00 PM - 9:15 PM",
    location: "Wilkins Theatre",
    description: "From the timeless grooves of the early decades to the bold, iconic vibes of the 2000s, this showcase brings history to life through movement, music, and unforgettable performances. Each piece captures the spirit, style, and attitude of its era, celebrating how dance has evolved!",
    category: "Social",
    link: "https://kean.campuslabs.com/engage/event/12284252"
  },
  // --- THURSDAY, APRIL 23, 2026 ---
  {
    id: 9,
    title: "Career Connect Station",
    date: "Thursday, April 23, 2026",
    time: "3:00 PM - 4:00 PM",
    location: "Harwood Arena (Main Lobby)",
    description: "Get hands-on help with your LinkedIn profile and Handshake job applications.",
    category: "Academic",
    link: "https://career.kean.edu/events/2026/04/23/career-connect-station-no-appointment-needed-6/"
  },
  {
    id: 10,
    title: "Community Yoga",
    date: "Thursday, April 23, 2026",
    time: "3:30 PM - 4:15 PM",
    location: "Nancy Thompson Learning Commons, L-114 (VISER)",
    description:"Enjoy a one-of-a-kind practice in this 270-degree immersive space, complete with stunning visual projections and audio features to enhance your flow.",
    category: "Social",
    link: "https://kean.campuslabs.com/engage/event/11953320"
  },
  {
    id: 11,
    title: "CS/IT/AI Capstone Project Exhibition",
    date: "Thursday, April 23, 2026",
    time: "3:30 - 5:30 PM",
    location: "North Avenue Academic Building (NAAB)",
    description: "Computer Science and IT students display their final senior capstone projects.",
    category: "Academic",
    link: "https://kean.campuslabs.com/engage/event/12328987"
  },
  {
    id: 12,
    title: "Deaf Café Night",
    date: "Thursday, April 23, 2026",
    time: "7:00 PM - 9:30 PM",
    location: "MSC Cougar's Den",
    description: "A rebranded and revamped version of our annual Deaf Panel event. In addition to the traditional Q&A panel, we have moved to a more social atmosphere and added more time for mingling at chatting, as well as light refreshments to be served.",
    category: "Social",
    link: "https://kean.campuslabs.com/engage/event/12407799"
  }
];
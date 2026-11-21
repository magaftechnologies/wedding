import { z } from "zod";

export const wedding = {
  bride: "Sandhya Rani",
  groom: "Akshay Yadav",
  brideFormal: "Chi. La. Sow. Sandhya Rani",
  groomFormal: "Chi. Akshay Yadav",
  groomParents: "Smt. & Sri Golla Vijayalaxmi – Raghuveer Yadav",
  brideParents: "Smt. & Sri Palem Laxmi – Gopal Yadav",
  brideResidence: "R/o. Jaklair",
  divineBlessings: ["Late Golla Eeramma", "Late Laxmappa Yadav", "Late A. Balamani", "Late A. Laxmanna"],
  blessings: ["Smt. P. Parvathi Devi", "Late Krishnamurthy Yadav"],
  date: "2026-12-04T09:00:00+05:30",
  displayDate: "Friday, 4 December 2026",
  time: "9:00 AM",
  lagnam: "Dhanur Lagnam",
  sabhaLagnam: "12:20 PM",
  venue: "Sri Garden Function Hall A/C",
  address: "Sri Satyanarayana Swamy Temple Road, Narayanapet",
  directions: "https://www.google.com/maps/search/?api=1&query=Sri+Garden+Function+Hall+A%2FC+Sri+Satyanarayana+Swamy+Temple+Road+Narayanapet",
};

export const rsvpSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Please use fewer than 100 characters."),
  attendance: z.enum(["yes", "maybe", "no"]),
});

export function countdownAt(now: number, target = Date.parse(wedding.date)) {
  const seconds = Math.max(0, Math.floor((target - now) / 1000));
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export const events = [
  { name: "Pellikoduku", telugu: "పెళ్లికొడుకు", date: "30", month: "NOVEMBER", time: "11:00 AM", description: "The Groom’s Prelude", symbol: "sun", image: 4, startsAt: "2026-11-30T11:00:00+05:30" },
  { name: "Pellikoduku 2.0", telugu: "పెళ్లికొడుకు 2.0", date: "01", month: "DECEMBER", time: "11:00 AM", description: "The Groom’s Grand Celebration", symbol: "heart", image: 0, startsAt: "2026-12-01T11:00:00+05:30" },
  { name: "Haldi", telugu: "పసుపు వేడుక", date: "02", month: "DECEMBER", time: "10:00 AM", description: "Golden Glow", symbol: "sun", image: 1, startsAt: "2026-12-02T10:00:00+05:30" },
  { name: "Mehendi", telugu: "మెహందీ", date: "02", month: "DECEMBER", time: "7:00 PM", description: "Mehendi Under the Stars", symbol: "flower", image: 3, startsAt: "2026-12-02T19:00:00+05:30" },
  { name: "Pelli Pandiri", telugu: "పెళ్లి పందిరి", date: "03", month: "DECEMBER", time: "9:00 AM", description: "The Sacred Beginning", symbol: "flame", image: 2, startsAt: "2026-12-03T09:00:00+05:30" },
  { name: "Baharaat / Baraat", telugu: "బారాత్", date: "03", month: "DECEMBER", time: "8:00 PM", description: "The Royal Baraat", symbol: "heart", image: 5, startsAt: "2026-12-03T20:00:00+05:30" },
] as const;
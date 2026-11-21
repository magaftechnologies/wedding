import { describe, expect, it } from "vitest";
import { countdownAt, events, rsvpSchema, wedding } from "../lib/wedding";

describe("Wedding invitation rules", () => {
  it("counts down to 4 December 2026 at 9:00 India time", () => {
    expect(wedding.date).toBe("2026-12-04T09:00:00+05:30");
    expect(countdownAt(Date.parse("2026-12-03T07:58:57+05:30"))).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 3 });
  });
  it("does not count below zero after the wedding", () => {
    expect(countdownAt(Date.parse("2026-12-07T10:30:00+05:30"))).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });
  it("keeps the six celebrations in the requested order", () => {
    expect(events.map((event) => event.name)).toEqual(["Pellikoduku", "Pellikoduku 2.0", "Haldi", "Mehendi", "Pelli Pandiri", "Baharaat / Baraat"]);
  });
  it("accepts all three attendance options", () => {
    for (const attendance of ["yes", "maybe", "no"]) expect(rsvpSchema.parse({ name: " Guest ", attendance })).toEqual({ name: "Guest", attendance });
  });
  it("rejects blank guest names and unknown attendance", () => {
    expect(rsvpSchema.safeParse({ name: " ", attendance: "yes" }).success).toBe(false);
    expect(rsvpSchema.safeParse({ name: "Guest", attendance: "other" }).success).toBe(false);
  });
  it("opens directions to the client venue", () => {
    expect(new URL(wedding.directions).searchParams.get("query")).toBe("Sri Garden Function Hall A/C Sri Satyanarayana Swamy Temple Road Narayanapet");
  });
  it("uses the supplied couple names", () => {
    expect([wedding.groom, wedding.bride, wedding.groomFormal, wedding.brideFormal]).toEqual(["Akshay Yadav", "Sandhya Rani", "Chi. Akshay Yadav", "Chi. La. Sow. Sandhya Rani"]);
  });
  it("uses the supplied family information without extra relatives", () => {
    expect([wedding.groomParents, wedding.brideParents, wedding.brideResidence]).toEqual(["Smt. & Sri Golla Vijayalaxmi – Raghuveer Yadav", "Smt. & Sri Palem Laxmi – Gopal Yadav", "R/o. Jaklair"]);
    expect(wedding.divineBlessings).toEqual(["Late Golla Eeramma", "Late Laxmappa Yadav", "Late A. Balamani", "Late A. Laxmanna"]);
    expect(wedding.blessings).toEqual(["Smt. P. Parvathi Devi", "Late Krishnamurthy Yadav"]);
  });
  it("preserves the ceremony and Sabha Lagnam", () => {
    expect([wedding.displayDate, wedding.time, wedding.lagnam, wedding.sabhaLagnam]).toEqual(["Friday, 4 December 2026", "9:00 AM", "Dhanur Lagnam", "12:20 PM"]);
  });
  it("preserves the exact venue and address", () => {
    expect([wedding.venue, wedding.address]).toEqual(["Sri Garden Function Hall A/C", "Sri Satyanarayana Swamy Temple Road, Narayanapet"]);
  });
  const expectedEvents = [
    ["Pellikoduku", "2026-11-30T11:00:00+05:30", "30", "NOVEMBER", "11:00 AM"],
    ["Pellikoduku 2.0", "2026-12-01T11:00:00+05:30", "01", "DECEMBER", "11:00 AM"],
    ["Haldi", "2026-12-02T10:00:00+05:30", "02", "DECEMBER", "10:00 AM"],
    ["Mehendi", "2026-12-02T19:00:00+05:30", "02", "DECEMBER", "7:00 PM"],
    ["Pelli Pandiri", "2026-12-03T09:00:00+05:30", "03", "DECEMBER", "9:00 AM"],
    ["Baharaat / Baraat", "2026-12-03T20:00:00+05:30", "03", "DECEMBER", "8:00 PM"],
  ];
  for (const expected of expectedEvents) {
    it(`preserves ${expected[0]} date and time`, () => {
      const event = events.find((entry) => entry.name === expected[0]);
      expect(event && [event.name, event.startsAt, event.date, event.month, event.time]).toEqual(expected);
    });
  }
});
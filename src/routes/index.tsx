import { createFileRoute } from "@tanstack/react-router";
import { Invitation } from "@/components/wedding/invitation";
import sharingPhoto from "@/assets/client-share.jpg.asset.json";

const sharingImage = sharingPhoto.url;
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshay ♡ Sandhya · Wedding Invitation · 4 December 2026" },
      {
        name: "description",
        content:
          "With the blessings of our families, we joyfully invite you to the wedding of Akshay Yadav and Sandhya Rani on Friday 4 December 2026 at Sri Garden Function Hall A/C, Narayanapet.",
      },
      { property: "og:title", content: "Akshay ♡ Sandhya · Wedding Invitation" },
      {
        property: "og:description",
        content:
          "Wedding celebrations · 30 November–4 December 2026 · Sri Garden Function Hall A/C, Narayanapet. Please RSVP.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: sharingImage },
      { name: "twitter:image", content: sharingImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Invitation />;
}

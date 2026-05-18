export type Fish = {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  palette: "clown" | "butterfly" | "tang";
  size: "small" | "medium" | "large";
  route: "reefArc" | "lagoonDrift" | "coralGlide";
  delay: string;
  top: string;
  depth: string;
};

export const fish: Fish[] = [
  {
    id: "maldivian-clownfish",
    name: "Maldivian Clownfish",
    scientificName: "Amphiprion nigripes",
    description:
      "Placeholder profile: a jewel-bright reef resident drifting close to swaying anemones in the warm, protected lagoons of the Maldives.",
    palette: "clown",
    size: "small",
    route: "reefArc",
    delay: "-8s",
    top: "58%",
    depth: "z-30",
  },
  {
    id: "raccoon-butterflyfish",
    name: "Raccoon Butterflyfish",
    scientificName: "Chaetodon lunula",
    description:
      "Placeholder profile: an elegant coral browser with a moonlit mask, moving in calm pairs across reef terraces at sunset-blue depths.",
    palette: "butterfly",
    size: "medium",
    route: "lagoonDrift",
    delay: "-18s",
    top: "38%",
    depth: "z-20",
  },
  {
    id: "powder-blue-tang",
    name: "Powder Blue Tang",
    scientificName: "Acanthurus leucosternon",
    description:
      "Placeholder profile: a vivid surgeonfish that sweeps over the reef like a flash of cobalt silk, grazing among sunlit coral gardens.",
    palette: "tang",
    size: "large",
    route: "coralGlide",
    delay: "-3s",
    top: "70%",
    depth: "z-40",
  },
];

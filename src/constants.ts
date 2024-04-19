export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export type HubItem = {
  key: string;
  title: string;
  description: string;
};

export const HUBS: HubItem[] = [
  {
    key: "books",
    title: "Books",
    description: "Description",
  },
  {
    key: "books",
    title: "Movies",
    description: "Description",
  },
  {
    key: "series",
    title: "Series",
    description: "Description",
  },
  {
    key: "anime",
    title: "Anime",
    description: "Description",
  },
  {
    key: "gaming",
    title: "Gaming",
    description: "Description",
  },
];

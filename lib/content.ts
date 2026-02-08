import fs from "fs";
import path from "path";

const contentRoot = path.join(process.cwd(), "content");

const readJson = <T>(relativePath: string): T => {
  const filePath = path.join(contentRoot, relativePath);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  permission: boolean;
  rating?: number;
  photo?: string;
  videoUrl?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type EventItem = {
  id: string;
  title: string;
  start: string;
  end?: string;
  description: string;
  location: string;
  price: number;
  capacity?: number;
  stripePriceEnv?: string;
};

export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  file: string;
  type: string;
  size?: string;
};

export const getTestimonials = () =>
  readJson<Testimonial[]>("testimonials/testimonials.json");

export const getFaqItems = () => readJson<FaqItem[]>("faq/faq.json");

export const getEvents = () => readJson<EventItem[]>("events/events.json");

export const getDownloads = () =>
  readJson<DownloadItem[]>("resources/downloads.json");

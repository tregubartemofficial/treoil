import type { ImageMetadata } from "astro";
import raw from "./products.json";

export type ProductType = "motor" | "gear" | "antifreeze" | "industrial";

export interface Product {
  slug: string;
  title: string;
  brand: string;
  type: ProductType;
  viscosity: string[];
  image: string;
  description: string[];
  specifications: string[];
}

export const typeLabels: Record<ProductType, string> = {
  motor: "Моторна олива",
  gear: "Трансмісійна олива",
  antifreeze: "Антифриз",
  industrial: "Індустріальні оливи та мастила",
};

export const typeShort: Record<ProductType, string> = {
  motor: "Моторні",
  gear: "Трансмісійні",
  antifreeze: "Антифризи",
  industrial: "Індустріальні",
};

export const products = raw as Product[];

const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/images/**/*.{jpg,png}", { eager: true });

export function productImage(p: Product): ImageMetadata {
  const img = images[`/src/assets/images/${p.image}`];
  if (!img) throw new Error(`Missing image for ${p.slug}: ${p.image}`);
  return img.default;
}

export function assetImage(path: string): ImageMetadata {
  const img = images[`/src/assets/images/${path}`];
  if (!img) throw new Error(`Missing image ${path}`);
  return img.default;
}

export const brands = [...new Set(products.map((p) => p.brand))];
export const types = [...new Set(products.map((p) => p.type))] as ProductType[];
export const viscosities = [...new Set(products.flatMap((p) => p.viscosity))].sort(
  (a, b) => parseInt(a) - parseInt(b) || a.localeCompare(b),
);

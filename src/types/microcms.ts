import type { MicroCMSListContent } from "microcms-js-sdk";

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  content: string;
  emoji: string;
  tags: Tag[];
  category: Category;
} & MicroCMSListContent;

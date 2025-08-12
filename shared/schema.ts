import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Multilingual content type
export const multilingualContentSchema = z.object({
  ru: z.string(),
  en: z.string(),
  cn: z.string(),
});

export const articles = pgTable("articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: jsonb("title").notNull(), // Multilingual
  content: jsonb("content").notNull(), // Multilingual
  excerpt: jsonb("excerpt"), // Multilingual
  category: varchar("category").notNull(),
  author: text("author").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsItems = pgTable("news_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: jsonb("title").notNull(), // Multilingual
  content: jsonb("content").notNull(), // Multilingual
  excerpt: jsonb("excerpt"), // Multilingual
  author: text("author").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const forumPosts = pgTable("forum_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: jsonb("title").notNull(), // Multilingual
  content: jsonb("content").notNull(), // Multilingual
  author: text("author").notNull(),
  category: varchar("category").notNull(),
  replies: integer("replies").default(0),
  likes: integer("likes").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: jsonb("title").notNull(), // Multilingual
  description: jsonb("description").notNull(), // Multilingual
  content: jsonb("content"), // Multilingual
  icon: varchar("icon"),
  gradient: varchar("gradient"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Content templates for form/content separation
export const contentTemplates = pgTable("content_templates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  key: varchar("key").notNull().unique(),
  title: jsonb("title").notNull(), // Multilingual
  content: jsonb("content").notNull(), // Multilingual
  category: varchar("category").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  createdAt: true,
}).extend({
  title: multilingualContentSchema,
  content: multilingualContentSchema,
  excerpt: multilingualContentSchema.optional(),
});

export const insertNewsSchema = createInsertSchema(newsItems).omit({
  id: true,
  createdAt: true,
}).extend({
  title: multilingualContentSchema,
  content: multilingualContentSchema,
  excerpt: multilingualContentSchema.optional(),
});

export const insertForumPostSchema = createInsertSchema(forumPosts).omit({
  id: true,
  createdAt: true,
}).extend({
  title: multilingualContentSchema,
  content: multilingualContentSchema,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
}).extend({
  title: multilingualContentSchema,
  description: multilingualContentSchema,
  content: multilingualContentSchema.optional(),
});

export const insertContentTemplateSchema = createInsertSchema(contentTemplates).omit({
  id: true,
  createdAt: true,
}).extend({
  title: multilingualContentSchema,
  content: multilingualContentSchema,
});

// Types
export type MultilingualContent = z.infer<typeof multilingualContentSchema>;
export type Article = typeof articles.$inferSelect;
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type NewsItem = typeof newsItems.$inferSelect;
export type InsertNewsItem = z.infer<typeof insertNewsSchema>;
export type ForumPost = typeof forumPosts.$inferSelect;
export type InsertForumPost = z.infer<typeof insertForumPostSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type ContentTemplate = typeof contentTemplates.$inferSelect;
export type InsertContentTemplate = z.infer<typeof insertContentTemplateSchema>;

// Language types
export type Language = 'ru' | 'en' | 'cn';

// Helper function to get content in specific language
export function getLocalizedContent(content: MultilingualContent, language: Language): string {
  return content[language] || content.ru; // Fallback to Russian if translation missing
}

import { type Article, type InsertArticle, type NewsItem, type InsertNewsItem, type ForumPost, type InsertForumPost, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Articles
  getArticles(): Promise<Article[]>;
  getArticle(id: string): Promise<Article | undefined>;
  getArticlesByCategory(category: string): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;

  // News
  getNews(): Promise<NewsItem[]>;
  getNewsItem(id: string): Promise<NewsItem | undefined>;
  createNewsItem(news: InsertNewsItem): Promise<NewsItem>;

  // Forum
  getForumPosts(): Promise<ForumPost[]>;
  getForumPost(id: string): Promise<ForumPost | undefined>;
  getForumPostsByCategory(category: string): Promise<ForumPost[]>;
  createForumPost(post: InsertForumPost): Promise<ForumPost>;

  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private articles: Map<string, Article>;
  private news: Map<string, NewsItem>;
  private forumPosts: Map<string, ForumPost>;
  private projects: Map<string, Project>;

  constructor() {
    this.articles = new Map();
    this.news = new Map();
    this.forumPosts = new Map();
    this.projects = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize with real content from the website
    const manifestArticle: Article = {
      id: randomUUID(),
      title: "Манифест неовсеединства",
      content: "На пути к обществу развития. Манифест философии неовсеединства представляет собой современное развитие классической философии всеединства, адаптированное к вызовам XXI века. Мы стремимся к созданию общества, основанного на принципах интегрального знания и гармоничного развития человеческого потенциала.",
      excerpt: "На пути к обществу развития. Манифест философии неовсеединства.",
      category: "manifest",
      author: "Интегральное сообщество",
      createdAt: new Date(),
    };

    const codexArticle: Article = {
      id: randomUUID(),
      title: "Интегральный кодекс",
      content: "Философская система синтеза, соединяющая принципы универсальности и строгости. Кодекс представляет собой свод принципов и методов интегральной философии, направленных на достижение целостного понимания реальности через синтез различных областей знания.",
      excerpt: "Философская система синтеза, соединяющая принципы универсальности и строгости.",
      category: "codex",
      author: "Интегральное сообщество",
      createdAt: new Date(),
    };

    this.articles.set(manifestArticle.id, manifestArticle);
    this.articles.set(codexArticle.id, codexArticle);

    // Initialize projects
    const projects: Project[] = [
      {
        id: randomUUID(),
        title: "Неовсеединство",
        description: "Современное развитие философии всеединства, объединяющее классические традиции с современными научными подходами.",
        content: "Подробное описание проекта неовсеединства...",
        icon: "infinity",
        gradient: "from-primary to-blue-600",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Интегралика",
        description: "Интегральный подход к познанию, синтезирующий различные области знания в единую систему понимания реальности.",
        content: "Подробное описание проекта интегралика...",
        icon: "puzzle-piece",
        gradient: "from-emerald-500 to-emerald-600",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Единое знание",
        description: "Синтез всех областей знания в единую когерентную систему, преодолевающую разрыв между науками и гуманитарными дисциплинами.",
        content: "Подробное описание проекта единое знание...",
        icon: "brain",
        gradient: "from-purple-500 to-purple-600",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Интегральная медицина",
        description: "Целостный подход к здоровью, объединяющий достижения современной медицины с традиционными методами лечения.",
        content: "Подробное описание проекта интегральная медицина...",
        icon: "heartbeat",
        gradient: "from-teal-500 to-teal-600",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Математизация философии",
        description: "Применение математических методов в философских исследованиях для достижения большей точности и строгости.",
        content: "Подробное описание проекта математизация философии...",
        icon: "square-root-alt",
        gradient: "from-orange-500 to-orange-600",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Проблема сознание-тело",
        description: "Исследование фундаментальной взаимосвязи между ментальными и физическими аспектами человеческого существования.",
        content: "Подробное описание проекта проблема сознание-тело...",
        icon: "head-side-brain",
        gradient: "from-indigo-500 to-indigo-600",
        createdAt: new Date(),
      },
    ];

    projects.forEach(project => this.projects.set(project.id, project));

    // Initialize news
    const newsItems: NewsItem[] = [
      {
        id: randomUUID(),
        title: "Новый выпуск журнала по интегральной философии",
        content: "Опубликован очередной номер научного издания с исследованиями в области интегрального знания. В этом выпуске представлены статьи ведущих философов и исследователей...",
        excerpt: "Опубликован очередной номер научного издания с исследованиями в области интегрального знания...",
        author: "Редакция",
        createdAt: new Date('2024-12-15'),
      },
      {
        id: randomUUID(),
        title: "Конференция \"Будущее интегральной философии\"",
        content: "Приглашаем к участию в международной конференции, посвященной современным направлениям интегральной философии...",
        excerpt: "Приглашаем к участию в международной конференции, посвященной современным направлениям...",
        author: "Организационный комитет",
        createdAt: new Date('2024-12-10'),
      },
      {
        id: randomUUID(),
        title: "Открытие новой исследовательской лаборатории",
        content: "В рамках Института интегрального знания начинает работу лаборатория по изучению сознания и его проявлений...",
        excerpt: "В рамках Института интегрального знания начинает работу лаборатория по изучению...",
        author: "Администрация",
        createdAt: new Date('2024-12-05'),
      },
    ];

    newsItems.forEach(item => this.news.set(item.id, item));
  }

  // Articles
  async getArticles(): Promise<Article[]> {
    return Array.from(this.articles.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getArticle(id: string): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async getArticlesByCategory(category: string): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.category === category)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = randomUUID();
    const article: Article = { ...insertArticle, id, createdAt: new Date() };
    this.articles.set(id, article);
    return article;
  }

  // News
  async getNews(): Promise<NewsItem[]> {
    return Array.from(this.news.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getNewsItem(id: string): Promise<NewsItem | undefined> {
    return this.news.get(id);
  }

  async createNewsItem(insertNews: InsertNewsItem): Promise<NewsItem> {
    const id = randomUUID();
    const newsItem: NewsItem = { ...insertNews, id, createdAt: new Date() };
    this.news.set(id, newsItem);
    return newsItem;
  }

  // Forum
  async getForumPosts(): Promise<ForumPost[]> {
    return Array.from(this.forumPosts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getForumPost(id: string): Promise<ForumPost | undefined> {
    return this.forumPosts.get(id);
  }

  async getForumPostsByCategory(category: string): Promise<ForumPost[]> {
    return Array.from(this.forumPosts.values())
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createForumPost(insertPost: InsertForumPost): Promise<ForumPost> {
    const id = randomUUID();
    const post: ForumPost = { ...insertPost, id, createdAt: new Date() };
    this.forumPosts.set(id, post);
    return post;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id, createdAt: new Date() };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();

import { 
  type Article, 
  type InsertArticle, 
  type NewsItem, 
  type InsertNewsItem, 
  type ForumPost, 
  type InsertForumPost, 
  type Project, 
  type InsertProject,
  type ContentTemplate,
  type InsertContentTemplate,
  type MultilingualContent
} from "@shared/schema";
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

  // Content Templates
  getContentTemplates(): Promise<ContentTemplate[]>;
  getContentTemplate(key: string): Promise<ContentTemplate | undefined>;
  createContentTemplate(template: InsertContentTemplate): Promise<ContentTemplate>;
}

export class MemStorage implements IStorage {
  private articles: Map<string, Article>;
  private news: Map<string, NewsItem>;
  private forumPosts: Map<string, ForumPost>;
  private projects: Map<string, Project>;
  private contentTemplates: Map<string, ContentTemplate>;

  constructor() {
    this.articles = new Map();
    this.news = new Map();
    this.forumPosts = new Map();
    this.projects = new Map();
    this.contentTemplates = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Helper function to create multilingual content
    const createMultilingualContent = (ru: string, en: string, cn: string): MultilingualContent => ({
      ru, en, cn
    });

    // Sample articles with multilingual content based on actual site content
    const manifestArticle: Article = {
      id: randomUUID(),
      title: createMultilingualContent(
        "Манифест неовсеединства",
        "Manifest of Neo-All-Unity",
        "新全统一宣言"
      ),
      content: createMultilingualContent(
        "На пути к обществу развития. Манифест философии неовсеединства представляет собой фундаментальное изложение принципов интегральной философии, направленной на создание гармоничного общества, основанного на синтезе конструктивных элементов различных философских и научных традиций.\n\nСинтез – основной метод интегральной философии. Он предполагает определение частных принципов, выделение в них конструктивной составляющей, интеграцию этих составляющих в новое целое.\n\nОрганический синтез – это всегда результат творческого озарения и удачи, искусство единения разорванного ранее многообразия.",
        "On the path to a development society. The Manifest of Neo-All-Unity philosophy presents a fundamental exposition of integral philosophy principles aimed at creating a harmonious society based on the synthesis of constructive elements from various philosophical and scientific traditions.\n\nSynthesis is the main method of integral philosophy. It involves defining particular principles, identifying their constructive components, and integrating these components into a new whole.\n\nOrganic synthesis is always the result of creative insight and success, the art of uniting previously fragmented diversity.",
        "走向发展社会之路。新全统一哲学宣言呈现了整体哲学原则的根本阐述，旨在基于各种哲学和科学传统建设性要素的综合创造和谐社会。\n\n综合是整体哲学的主要方法。它涉及定义特定原则，识别其建设性成分，并将这些成分整合成新的整体。\n\n有机综合始终是创造性洞察和成功的结果，是统一先前分裂多样性的艺术。"
      ),
      excerpt: createMultilingualContent(
        "На пути к обществу развития. Манифест философии неовсеединства.",
        "On the path to a development society. The Neo-All-Unity philosophy manifesto.",
        "走向发展社会之路。新全统一哲学宣言。"
      ),
      category: "manifest",
      author: "Интегральное сообщество",
      createdAt: new Date(),
    };

    const codexArticle: Article = {
      id: randomUUID(),
      title: createMultilingualContent(
        "Интегральный кодекс",
        "Integral Codex",
        "整体法典"
      ),
      content: createMultilingualContent(
        "Философская система синтеза, соединяющая принципы универсальности и строгости. Кодекс представляет собой методологическую основу для интегрального подхода к познанию и преобразованию мира.\n\nИнтегральная философия стремится использовать всё конструктивное, наработанное в рациональной методологии философии и науки. Модели и методы интегральной философии – это не догмы, но гипотезы, которые должны приниматься лишь в той мере, в какой они способны отвечать на возникающие контрпримеры и проблемы.",
        "A philosophical system of synthesis combining principles of universality and rigor. The Codex represents a methodological foundation for an integral approach to understanding and transforming the world.\n\nIntegral philosophy strives to use everything constructive developed in the rational methodology of philosophy and science. Models and methods of integral philosophy are not dogmas, but hypotheses that should be accepted only to the extent that they can respond to emerging counterexamples and problems.",
        "结合普遍性和严谨性原则的哲学综合体系。法典代表了理解和改造世界的整体方法的方法论基础。\n\n整体哲学努力使用在哲学和科学理性方法论中发展的一切建设性内容。整体哲学的模型和方法不是教条，而是假设，只有在能够回应出现的反例和问题的程度上才应被接受。"
      ),
      excerpt: createMultilingualContent(
        "Философская система синтеза, соединяющая принципы универсальности и строгости.",
        "A philosophical system of synthesis combining universality and rigor principles.",
        "结合普遍性和严谨性原则的哲学综合体系。"
      ),
      category: "codex",
      author: "Интегральное сообщество",
      createdAt: new Date(),
    };

    this.articles.set(manifestArticle.id, manifestArticle);
    this.articles.set(codexArticle.id, codexArticle);

    // Initialize projects with multilingual content
    const projects: Project[] = [
      {
        id: randomUUID(),
        title: createMultilingualContent(
          "Институт ИИН",
          "Institute of Integral Research",
          "整体研究院"
        ),
        description: createMultilingualContent(
          "Синтез научного знания для познания единой реальности",
          "Synthesis of scientific knowledge for understanding unified reality",
          "科学知识综合以理解统一现实"
        ),
        content: createMultilingualContent(
          "Институт интегральных исследований занимается разработкой методологии синтеза различных областей знания для формирования целостной картины мира.",
          "The Institute of Integral Research develops methodology for synthesizing various fields of knowledge to form a holistic worldview.",
          "整体研究院致力于开发综合各种知识领域的方法论，以形成整体的世界观。"
        ),
        icon: "Building2",
        gradient: "from-blue-600 to-purple-600",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: createMultilingualContent(
          "Интегральный журнал",
          "Integral Journal",
          "整体期刊"
        ),
        description: createMultilingualContent(
          "Научное периодическое издание по интегральной философии",
          "Scientific periodical on integral philosophy",
          "整体哲学科学期刊"
        ),
        content: createMultilingualContent(
          "Журнал публикует статьи по теоретическим и практическим аспектам интегральной философии, способствуя развитию научного диалога.",
          "The journal publishes articles on theoretical and practical aspects of integral philosophy, promoting scientific dialogue.",
          "期刊发表整体哲学理论和实践方面的文章，促进科学对话。"
        ),
        icon: "BookOpen",
        gradient: "from-green-600 to-blue-600",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: createMultilingualContent(
          "Образовательные программы",
          "Educational Programs",
          "教育项目"
        ),
        description: createMultilingualContent(
          "Курсы и лекции по интегральной философии",
          "Courses and lectures on integral philosophy",
          "整体哲学课程和讲座"
        ),
        content: createMultilingualContent(
          "Комплексная образовательная программа для изучения принципов и методов интегральной философии.",
          "Comprehensive educational program for studying integral philosophy principles and methods.",
          "学习整体哲学原则和方法的综合教育项目。"
        ),
        icon: "GraduationCap",
        gradient: "from-orange-600 to-red-600",
        createdAt: new Date(),
      },
    ];

    projects.forEach(project => this.projects.set(project.id, project));

    // Initialize news with multilingual content
    const newsItems: NewsItem[] = [
      {
        id: randomUUID(),
        title: createMultilingualContent(
          "Открытие нового направления исследований",
          "Opening of a new research direction",
          "开辟新的研究方向"
        ),
        content: createMultilingualContent(
          "Интегральное сообщество объявляет о запуске новой исследовательской программы, направленной на изучение применения интегральных принципов в современной науке и технологиях.",
          "The Integral Community announces the launch of a new research program aimed at studying the application of integral principles in modern science and technology.",
          "整体社区宣布启动新的研究计划，旨在研究整体原则在现代科学技术中的应用。"
        ),
        excerpt: createMultilingualContent(
          "Интегральное сообщество объявляет о запуске новой исследовательской программы...",
          "The Integral Community announces the launch of a new research program...",
          "整体社区宣布启动新的研究计划..."
        ),
        author: "Пресс-служба",
        createdAt: new Date('2024-12-15'),
      },
      {
        id: randomUUID(),
        title: createMultilingualContent(
          "Конференция \"Будущее интегральной философии\"",
          "Conference \"Future of Integral Philosophy\"",
          "\"整体哲学的未来\"会议"
        ),
        content: createMultilingualContent(
          "Приглашаем к участию в международной конференции, посвященной современным направлениям интегральной философии и их влиянию на развитие человечества.",
          "We invite you to participate in an international conference dedicated to modern directions of integral philosophy and their impact on human development.",
          "我们邀请您参加致力于整体哲学现代方向及其对人类发展影响的国际会议。"
        ),
        excerpt: createMultilingualContent(
          "Приглашаем к участию в международной конференции...",
          "We invite you to participate in an international conference...",
          "我们邀请您参加国际会议..."
        ),
        author: "Организационный комитет",
        createdAt: new Date('2024-12-10'),
      },
    ];

    newsItems.forEach(item => this.news.set(item.id, item));

    // Initialize content templates for form/content separation
    const contentTemplates: ContentTemplate[] = [
      {
        id: randomUUID(),
        key: "hero_title",
        title: createMultilingualContent(
          "Заголовок героя",
          "Hero Title",
          "英雄标题"
        ),
        content: createMultilingualContent(
          "Интегральное сообщество",
          "Integral Community",
          "整体社区"
        ),
        category: "ui",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        key: "hero_subtitle",
        title: createMultilingualContent(
          "Подзаголовок героя",
          "Hero Subtitle",
          "英雄副标题"
        ),
        content: createMultilingualContent(
          "Консолидация всех конструктивных сил на основе принципов интегральной философии",
          "Consolidation of all constructive forces based on integral philosophy principles",
          "基于整体哲学原则整合所有建设性力量"
        ),
        category: "ui",
        createdAt: new Date(),
      },
    ];

    contentTemplates.forEach(template => this.contentTemplates.set(template.key, template));
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

  // Content Templates
  async getContentTemplates(): Promise<ContentTemplate[]> {
    return Array.from(this.contentTemplates.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getContentTemplate(key: string): Promise<ContentTemplate | undefined> {
    return this.contentTemplates.get(key);
  }

  async createContentTemplate(insertTemplate: InsertContentTemplate): Promise<ContentTemplate> {
    const id = randomUUID();
    const template: ContentTemplate = { ...insertTemplate, id, createdAt: new Date() };
    this.contentTemplates.set(insertTemplate.key, template);
    return template;
  }
}

export const storage = new MemStorage();

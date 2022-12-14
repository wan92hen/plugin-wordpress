export interface WpPost {
  title: string;
  id: string;
  pubDate: string;
  postDate: string;
  description: string;
  content: string;
  excerpt: string;
  commentStatus: "closed";
  pingStatus: string;
  postName: string;
  status: "publish" | "draft" | "trash";
  isSticky: "0" | "1";
  categories: WpCategory[];
  tags: WpTag[];
  thumbnail: string;
  creator: string;
}

export interface WpPage {
  title: string;
  id: string;
  pubDate: string;
  postDate: string;
  description: string;
  content: string;
  excerpt: string;
  commentStatus: "closed";
  pingStatus: string;
  postName: string;
  status: "publish" | "draft" | "trash";
  isSticky: "0" | "1";
  creator: string;
}

export interface WpCategory {
  id: string;
  slug: string;
  parent: string;
  name: string;
}

export interface WpTag {
  id: string;
  slug: string;
  name: string;
}

export interface WpAuthor {
  login: string;
  email: string;
  displayName: string;
}

export interface WpNavMenu {
  id: string;
  slug: string;
  name: string;
  items: WpNavMenuItem[];
}

export interface WpNavMenuItem {
  id: string;
  name: string;
  targetType: "page" | "post" | "category" | "custom";
  target: string;
  order: string;
  parent: string;
  navMenu: string;
}

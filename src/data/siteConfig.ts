export const siteConfig = {
  name: "Shazin Ansari",
  title: "Shazin Ansari – AI Engineer | Generative AI | LLM Applications | AI Research",
  description:
    "Official portfolio of Shazin Ansari – AI Engineer specializing in Generative AI, Large Language Models, Retrieval-Augmented Generation (RAG), prompt engineering, RLHF, and machine learning systems.",
  url: "https://shazinansari.dev", // Production canonical URL placeholder
  ogImage: "https://shazinansari.dev/og-image.png",
  author: "Shazin Ansari",
  keywords: [
    "Shazin Ansari",
    "AI Engineer",
    "Generative AI",
    "Large Language Models",
    "LLM Applications",
    "Retrieval-Augmented Generation",
    "RAG",
    "AI Research",
    "Prompt Engineering",
    "RLHF",
    "LangChain",
    "LangSmith",
    "FAISS",
    "FastAPI",
    "Machine Learning",
    "Togle Labs",
    "Dubai",
    "UAE",
    "RAG Chatbots",
    "Keywords Studios",
    "Amazon Client Engagement",
  ],
  socials: {
    github: "https://github.com/shazin-ansari",
    linkedin: "https://linkedin.com/in/shazin-ansari",
    email: "shazin.ansari.ai@gmail.com",
  },
  location: "Open to opportunities in UAE, India, and internationally",
};

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shazin Ansari",
    jobTitle: "AI Engineer",
    description:
      "AI Engineer focused on Generative AI, Large Language Models, Retrieval-Augmented Generation, and intelligent AI applications.",
    url: siteConfig.url,
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
    knowsAbout: [
      "Artificial Intelligence",
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "RLHF Workflows",
      "Machine Learning",
      "Computer Vision",
      "Python",
      "FastAPI",
      "LangChain",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "MES College of Engineering, Kuttippuram",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shazin Ansari – AI Engineer Portfolio",
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: "Shazin Ansari",
    },
  };
}

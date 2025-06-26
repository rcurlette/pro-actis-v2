export interface QuizAnswer {
  questionId: string;
  value: number | string;
  category: "client_ai" | "personal_ai" | "readiness";
}

export interface QuizQuestion {
  id: string;
  category: "client_ai" | "personal_ai" | "readiness";
  question: string;
  options: {
    value: number;
    label: string;
    description?: string;
  }[];
}

export interface QuizResult {
  overallScore: number;
  categoryScores: {
    client_ai: number;
    personal_ai: number;
    readiness: number;
  };
  qualification: "high" | "medium" | "low";
  recommendations: string[];
  strengths: string[];
  improvements: string[];
}

export const quizQuestions: QuizQuestion[] = [
  // Client AI Usage (6 questions)
  {
    id: "client_demand",
    category: "client_ai",
    question:
      "How often do your clients request AI-assisted legal services or mention AI in their inquiries?",
    options: [
      {
        value: 0,
        label: "Never",
        description: "Clients have not mentioned AI",
      },
      { value: 25, label: "Rarely", description: "1-2 times in the past year" },
      { value: 50, label: "Sometimes", description: "Monthly or quarterly" },
      { value: 75, label: "Often", description: "Weekly or bi-weekly" },
      {
        value: 100,
        label: "Regularly",
        description: "Multiple times per week",
      },
    ],
  },
  {
    id: "client_awareness",
    category: "client_ai",
    question:
      "How knowledgeable are your clients about AI applications in legal work?",
    options: [
      {
        value: 0,
        label: "Not at all",
        description: "No understanding of AI in legal context",
      },
      {
        value: 25,
        label: "Basic awareness",
        description: "Know AI exists but limited understanding",
      },
      {
        value: 50,
        label: "Moderate understanding",
        description: "Understand some AI applications",
      },
      {
        value: 75,
        label: "Well-informed",
        description: "Good grasp of AI capabilities",
      },
      {
        value: 100,
        label: "Expert level",
        description: "Deep understanding of AI in legal work",
      },
    ],
  },
  {
    id: "client_expectations",
    category: "client_ai",
    question:
      "Do clients expect faster turnaround times or cost efficiencies due to AI adoption?",
    options: [
      {
        value: 0,
        label: "No expectations",
        description: "Traditional service expectations",
      },
      {
        value: 25,
        label: "Minor expectations",
        description: "Occasional mentions of efficiency",
      },
      {
        value: 50,
        label: "Some expectations",
        description: "Regular discussions about speed/cost",
      },
      {
        value: 75,
        label: "High expectations",
        description: "Strong emphasis on AI benefits",
      },
      {
        value: 100,
        label: "Demanding AI benefits",
        description: "AI efficiency is a requirement",
      },
    ],
  },
  {
    id: "competitor_pressure",
    category: "client_ai",
    question:
      "How often do clients compare your services to competitors using AI tools?",
    options: [
      {
        value: 0,
        label: "Never",
        description: "No competitive comparisons mentioned",
      },
      {
        value: 25,
        label: "Rarely",
        description: "Occasional mentions of other firms",
      },
      {
        value: 50,
        label: "Sometimes",
        description: "Regular competitive discussions",
      },
      {
        value: 75,
        label: "Often",
        description: "Frequent comparisons to AI-enabled firms",
      },
      {
        value: 100,
        label: "Constantly",
        description: "Clients actively benchmark against AI users",
      },
    ],
  },
  {
    id: "client_sophistication",
    category: "client_ai",
    question:
      "What percentage of your clients are from tech-forward industries or large corporations?",
    options: [
      {
        value: 0,
        label: "0-10%",
        description: "Mostly traditional small businesses",
      },
      { value: 25, label: "11-25%", description: "Some mid-size companies" },
      {
        value: 50,
        label: "26-50%",
        description: "Mix of traditional and modern clients",
      },
      {
        value: 75,
        label: "51-75%",
        description: "Majority are tech-aware organizations",
      },
      {
        value: 100,
        label: "76-100%",
        description: "Primarily tech companies and enterprises",
      },
    ],
  },
  {
    id: "client_ai_tools",
    category: "client_ai",
    question:
      "Do your clients use AI tools in their own businesses and expect you to match their efficiency?",
    options: [
      {
        value: 0,
        label: "No AI usage",
        description: "Clients are not using AI tools",
      },
      {
        value: 25,
        label: "Limited usage",
        description: "Few clients use basic AI tools",
      },
      {
        value: 50,
        label: "Moderate usage",
        description: "About half use AI in their operations",
      },
      {
        value: 75,
        label: "High usage",
        description: "Most clients are AI-enabled",
      },
      {
        value: 100,
        label: "Universal usage",
        description: "All clients expect AI-level efficiency",
      },
    ],
  },

  // Personal/Firm AI Usage (6 questions)
  {
    id: "current_ai_tools",
    category: "personal_ai",
    question:
      "How many AI tools does your firm currently use in daily operations?",
    options: [
      { value: 0, label: "None", description: "No AI tools in use" },
      { value: 25, label: "1-2 tools", description: "Basic AI adoption" },
      { value: 50, label: "3-5 tools", description: "Moderate AI integration" },
      { value: 75, label: "6-10 tools", description: "Advanced AI usage" },
      {
        value: 100,
        label: "10+ tools",
        description: "Comprehensive AI ecosystem",
      },
    ],
  },
  {
    id: "ai_integration",
    category: "personal_ai",
    question:
      "How well integrated are AI tools into your core legal processes?",
    options: [
      {
        value: 0,
        label: "Not integrated",
        description: "AI tools are separate from workflows",
      },
      {
        value: 25,
        label: "Minimal integration",
        description: "Used for basic tasks only",
      },
      {
        value: 50,
        label: "Partially integrated",
        description: "Some workflows include AI",
      },
      {
        value: 75,
        label: "Well integrated",
        description: "AI is part of most processes",
      },
      {
        value: 100,
        label: "Fully integrated",
        description: "AI seamlessly embedded everywhere",
      },
    ],
  },
  {
    id: "team_adoption",
    category: "personal_ai",
    question:
      "What percentage of your team actively uses AI tools in their work?",
    options: [
      { value: 0, label: "0%", description: "No team members use AI" },
      { value: 25, label: "1-25%", description: "Few early adopters" },
      { value: 50, label: "26-50%", description: "About half the team" },
      { value: 75, label: "51-75%", description: "Majority of team members" },
      { value: 100, label: "76-100%", description: "Universal team adoption" },
    ],
  },
  {
    id: "ai_roi",
    category: "personal_ai",
    question:
      "How much time/cost savings have you achieved through AI implementation?",
    options: [
      {
        value: 0,
        label: "No savings",
        description: "No measurable improvements",
      },
      {
        value: 25,
        label: "1-10% savings",
        description: "Minimal efficiency gains",
      },
      {
        value: 50,
        label: "11-25% savings",
        description: "Moderate improvements",
      },
      {
        value: 75,
        label: "26-40% savings",
        description: "Significant efficiency gains",
      },
      {
        value: 100,
        label: "40%+ savings",
        description: "Dramatic productivity improvements",
      },
    ],
  },
  {
    id: "ai_strategy",
    category: "personal_ai",
    question:
      "Does your firm have a comprehensive AI strategy and implementation roadmap?",
    options: [
      {
        value: 0,
        label: "No strategy",
        description: "Ad-hoc AI usage without planning",
      },
      {
        value: 25,
        label: "Basic planning",
        description: "Some discussion about AI direction",
      },
      {
        value: 50,
        label: "Developing strategy",
        description: "Working on comprehensive AI plan",
      },
      {
        value: 75,
        label: "Clear strategy",
        description: "Well-defined AI roadmap in place",
      },
      {
        value: 100,
        label: "Advanced strategy",
        description: "Sophisticated AI governance & execution",
      },
    ],
  },
  {
    id: "ai_results_tracking",
    category: "personal_ai",
    question:
      "How effectively do you measure and track AI tool performance and ROI?",
    options: [
      {
        value: 0,
        label: "No tracking",
        description: "No measurement of AI impact",
      },
      {
        value: 25,
        label: "Basic tracking",
        description: "Informal observation of results",
      },
      {
        value: 50,
        label: "Some metrics",
        description: "Track basic performance indicators",
      },
      {
        value: 75,
        label: "Comprehensive metrics",
        description: "Detailed ROI analysis",
      },
      {
        value: 100,
        label: "Advanced analytics",
        description: "Sophisticated performance dashboards",
      },
    ],
  },

  // AI Readiness (4 questions)
  {
    id: "comfort_level",
    category: "readiness",
    question:
      "How comfortable are you and your team with learning and implementing new AI technologies?",
    options: [
      {
        value: 0,
        label: "Very uncomfortable",
        description: "Resistance to new technology",
      },
      {
        value: 25,
        label: "Somewhat uncomfortable",
        description: "Hesitant but willing to try",
      },
      {
        value: 50,
        label: "Neutral",
        description: "Open to learning with support",
      },
      {
        value: 75,
        label: "Comfortable",
        description: "Eager to adopt new AI tools",
      },
      {
        value: 100,
        label: "Very comfortable",
        description: "Excited about AI innovation",
      },
    ],
  },
  {
    id: "tech_infrastructure",
    category: "readiness",
    question:
      "How would you rate your current technology infrastructure for AI implementation?",
    options: [
      {
        value: 0,
        label: "Outdated",
        description: "Legacy systems, limited capabilities",
      },
      {
        value: 25,
        label: "Basic",
        description: "Standard tools, some limitations",
      },
      {
        value: 50,
        label: "Adequate",
        description: "Good foundation for AI integration",
      },
      {
        value: 75,
        label: "Modern",
        description: "Cloud-based, AI-ready infrastructure",
      },
      {
        value: 100,
        label: "Cutting-edge",
        description: "Advanced, fully optimized for AI",
      },
    ],
  },
  {
    id: "investment_readiness",
    category: "readiness",
    question:
      "What is your budget appetite for AI tools and implementation support?",
    options: [
      {
        value: 0,
        label: "No budget",
        description: "Cannot allocate funds for AI",
      },
      {
        value: 25,
        label: "Limited budget",
        description: "$1-5k monthly for AI tools",
      },
      {
        value: 50,
        label: "Moderate budget",
        description: "$5-15k monthly investment",
      },
      {
        value: 75,
        label: "Substantial budget",
        description: "$15-30k monthly allocation",
      },
      {
        value: 100,
        label: "Significant budget",
        description: "$30k+ monthly for AI transformation",
      },
    ],
  },
  {
    id: "urgency_level",
    category: "readiness",
    question:
      "How urgent is AI implementation for your competitive positioning?",
    options: [
      { value: 0, label: "No urgency", description: "Can wait indefinitely" },
      {
        value: 25,
        label: "Low urgency",
        description: "Nice to have within 2+ years",
      },
      {
        value: 50,
        label: "Moderate urgency",
        description: "Important within 12-18 months",
      },
      {
        value: 75,
        label: "High urgency",
        description: "Critical within 6-12 months",
      },
      {
        value: 100,
        label: "Immediate urgency",
        description: "Must implement within 3-6 months",
      },
    ],
  },
];

export const calculateQuizScore = (answers: QuizAnswer[]): QuizResult => {
  const categoryScores = {
    client_ai: 0,
    personal_ai: 0,
    readiness: 0,
  };

  const categoryCounts = {
    client_ai: 0,
    personal_ai: 0,
    readiness: 0,
  };

  // Calculate category scores
  answers.forEach((answer) => {
    if (typeof answer.value === "number" && answer.category in categoryScores) {
      categoryScores[answer.category] += answer.value;
      categoryCounts[answer.category]++;
    }
  });

  // Average scores per category
  Object.keys(categoryScores).forEach((category) => {
    const key = category as keyof typeof categoryScores;
    if (categoryCounts[key] > 0) {
      categoryScores[key] = categoryScores[key] / categoryCounts[key];
    }
  });

  // Calculate overall score
  const overallScore = Math.round(
    (categoryScores.client_ai +
      categoryScores.personal_ai +
      categoryScores.readiness) /
      3,
  );

  // Determine qualification level (reversed: lower scores = higher priority for Pro-Actis services)
  let qualification: "high" | "medium" | "low";
  if (overallScore <= 39) {
    qualification = "high";
  } else if (overallScore <= 69) {
    qualification = "medium";
  } else {
    qualification = "low";
  }

  // Generate recommendations, strengths, and improvements
  const recommendations = generateRecommendations(
    categoryScores,
    qualification,
  );
  const strengths = generateStrengths(categoryScores);
  const improvements = generateImprovements(categoryScores, qualification);

  return {
    overallScore,
    categoryScores: {
      client_ai: Math.round(categoryScores.client_ai),
      personal_ai: Math.round(categoryScores.personal_ai),
      readiness: Math.round(categoryScores.readiness),
    },
    qualification,
    recommendations,
    strengths,
    improvements,
  };
};

const generateRecommendations = (
  scores: { client_ai: number; personal_ai: number; readiness: number },
  qualification: "high" | "medium" | "low",
): string[] => {
  const recommendations: string[] = [];

  if (qualification === "low") {
    recommendations.push(
      "Immediate AI strategy development is critical to maintain competitive positioning",
      "Start with basic AI tools like document automation and client communication",
      "Invest in team training and change management for AI adoption",
      "Establish baseline metrics to track AI implementation progress",
    );
  } else if (qualification === "medium") {
    recommendations.push(
      "Accelerate AI integration to match client expectations and market demands",
      "Implement advanced tools for contract analysis and legal research automation",
      "Develop comprehensive AI governance and quality control processes",
      "Create client communication strategy highlighting your AI capabilities",
    );
  } else {
    recommendations.push(
      "Focus on AI optimization and advanced workflow automation",
      "Explore cutting-edge AI tools for predictive analytics and case outcome modeling",
      "Position your firm as an AI thought leader in the legal industry",
      "Develop white-label AI solutions for other law firms",
    );
  }

  // Add specific recommendations based on category weaknesses
  if (scores.client_ai < 40) {
    recommendations.push(
      "Educate clients about AI benefits and your capabilities to manage expectations",
    );
  }
  if (scores.personal_ai < 40) {
    recommendations.push(
      "Implement foundational AI tools for document review and case management",
    );
  }
  if (scores.readiness < 40) {
    recommendations.push(
      "Invest in technology infrastructure and team AI literacy programs",
    );
  }

  return recommendations.slice(0, 5); // Return top 5 recommendations
};

const generateStrengths = (scores: {
  client_ai: number;
  personal_ai: number;
  readiness: number;
}): string[] => {
  const strengths: string[] = [];

  if (scores.client_ai >= 60) {
    strengths.push(
      "Strong client awareness of AI benefits creates market demand",
    );
  }
  if (scores.personal_ai >= 60) {
    strengths.push("Good foundation of AI tool usage and integration");
  }
  if (scores.readiness >= 60) {
    strengths.push("High readiness for AI adoption with good infrastructure");
  }
  if (scores.client_ai >= 70 && scores.personal_ai >= 70) {
    strengths.push(
      "Excellent alignment between client expectations and internal capabilities",
    );
  }

  return strengths;
};

const generateImprovements = (
  scores: { client_ai: number; personal_ai: number; readiness: number },
  qualification: "high" | "medium" | "low",
): string[] => {
  const improvements: string[] = [];

  if (scores.client_ai < 50) {
    improvements.push("Client education about AI capabilities and benefits");
  }
  if (scores.personal_ai < 50) {
    improvements.push("Expand AI tool adoption and team training");
  }
  if (scores.readiness < 50) {
    improvements.push(
      "Technology infrastructure upgrades and budget allocation",
    );
  }

  // Add qualification-specific improvements
  if (qualification === "low") {
    improvements.push("Fundamental AI strategy development");
    improvements.push("Basic AI tool implementation and change management");
  } else if (qualification === "medium") {
    improvements.push("Advanced AI workflow integration");
    improvements.push("Performance measurement and optimization systems");
  }

  return improvements;
};

export const getQualificationMessage = (
  qualification: "high" | "medium" | "low",
): {
  title: string;
  message: string;
  urgency: "low" | "medium" | "high";
} => {
  switch (qualification) {
    case "high":
      return {
        title: "High Priority: Immediate AI Implementation Needed",
        message:
          "Your assessment reveals significant gaps in AI adoption that put your firm at competitive risk. Pro-Actis can help you rapidly implement AI solutions to meet client expectations and market demands.",
        urgency: "high",
      };
    case "medium":
      return {
        title: "Moderate Priority: AI Optimization Opportunity",
        message:
          "You have a solid foundation but need strategic guidance to optimize your AI implementation. Pro-Actis can help you accelerate adoption and maximize ROI from your AI investments.",
        urgency: "medium",
      };
    case "low":
      return {
        title: "Low Priority: Content Nurturing & Advanced Optimization",
        message:
          "Your firm is well-positioned in AI adoption. Pro-Actis can help you fine-tune your systems, explore advanced tools, and maintain your competitive advantage in the market through ongoing content and optimization.",
        urgency: "low",
      };
  }
};

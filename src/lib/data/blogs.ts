enum Category {
  CareerTips = 'career-tips',
  Interviews = 'interviews',
}

type TArticle = {
  id: number;
  title: string;
  content: string;
  date: Date;
  category: Category;
  image: string;
};

const articles: TArticle[] = [
  {
    id: 1,
    title: 'How Working From Home Can Reduce Stress',
    content: 'Feeling like work is a constant source of stress? You’re not...',

    date: new Date('2023-07-01'),
    category: Category.CareerTips,
    image: 'image',
  },
  {
    id: 2,
    title: 'How to Break Into Remote Work Industries: 5 Tips',
    content:
      "Whether you’re speaking with the recruiter or you're in the final...",
    date: new Date('2024-01-15'),
    category: Category.CareerTips,
    image: 'image',
  },
  {
    id: 3,
    title: 'How intrapreneurship can help you stand out at work ',
    content:
      "Whether you’re speaking with the recruiter or you're in the final..",
    date: new Date('2023-07-01'),
    category: Category.CareerTips,
    image: 'image',
  },
  {
    id: 4,
    title: 'How to Know Your Resume Is Ready to be Submitted',
    content: 'Feeling like work is a constant source of stress? You’re not...',
    date: new Date('2024-01-15'),
    category: Category.Interviews,
    image: 'image',
  },
  {
    id: 5,
    title: 'How to Sharpen Your Social Skills When You WFH',
    content:
      'Here are the latest trends in the job market that you should know about...',
    date: new Date('2024-03-20'),
    category: Category.Interviews,
    image: 'image',
  },
  {
    id: 6,
    title: 'How to explain why you’re right for the job',
    content:
      "Whether you’re speaking with the recruiter or you're in the final stages of the interview process, you know you have the chops for the role.",
    date: new Date('2024-03-20'),
    category: Category.CareerTips,
    image: 'image',
  },
  {
    id: 7,
    title: 'How do you answer the question, “How do you like to be managed?”',
    content:
      'It sounds like a trick question: Answer it the wrong way, and you could find yourself at odds with a new boss or without a job offer.',
    date: new Date('2024-03-20'),
    category: Category.CareerTips,
    image: 'image',
  },
  {
    id: 8,
    title: 'Tips for shaking your job interview jitters',
    content:
      'Going into an interview can be nerve-wracking even for the most confident candidate. But an interview isn’t just a time.',
    date: new Date('2024-03-20'),
    category: Category.CareerTips,
    image: 'image',
  },
];

const getAllArticles = () => {
  return articles;
};

const getSortedArticles = articles.sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);

const getArticleById = (id: number) => {
  return articles.find((article) => article.id === id);
};

export { getAllArticles, getArticleById, getSortedArticles };

import { Question, TopicKey } from "./types";
import { prompt } from "./llm";

const allTopics: TopicKey[] = ['complex_polynomials', 'vector_projections', 'chemical_equilibria']; // Many topic keys

const allQuestions: Question[] = [ // Many questions, each tagged with one or more topics
  {
    question: 'Solve z^2 + 1 = 0',
    solution: '±i',
    mark: 1,
    topics: ['complex_polynomials'],
  },
  {
    question: 'Solve z^2 + 4 = 0',
    solution: '±2i',
    mark: 1,
    topics: ['complex_polynomials'],
  },
  {
    question: 'Find the projection of (3, 4) onto (1, 0)',
    solution: '(3, 0)',
    mark: 2,
    topics: ['vector_projections'],
  },
  {
    question: 'Project the complex number 3 + 4i onto the real axis as a vector',
    solution: '(3, 0)',
    mark: 3,
    topics: ['complex_polynomials', 'vector_projections'], // Shared across two topics
  },
  {
    question: 'Given N2 + 3H2 ⇌ 2NH3, write the equilibrium constant expression Kc',
    solution: 'Kc = [NH3]^2 / ([N2] · [H2]^3)',
    mark: 2,
    topics: ['chemical_equilibria'],
  },
];

const generate = (topics: TopicKey[], studentIdsInLesson: string[]): Question[] => {
  const candidates = allQuestions.filter((question) =>
    question.topics.some((topic) => topics.includes(topic))
  );

  // Math.random() - 0.5 shuffles the away randomly, as it randomly outputs a negative or positive number.
  return [...candidates].sort(() => Math.random() - 0.5).slice(0, 3);
};

const generateQuestionWithAI = (topics: TopicKey[]) => {
  const response = prompt(`Generate 3 quiz questions covering these topics: ${topics.join(', ')} 
  in the format of a JSON array of Question objects. A Question object has the following properties: 
  question (string), solution (string), mark (number), topics (array of topic keys).`);

  return response;
};

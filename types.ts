export type TopicKey = string;

export interface Question {
  question: string;
  solution: string;
  mark: number;
  topics: TopicKey[]; // A question can belong to many topics (questions <-> topics is many-to-many)
}

export interface SurveyItemProps {
  question: string;
  no: number;
  setNo: (newNo: number) => void;
  setAnswer : (newAnswer: string) => void;
}
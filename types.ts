
export interface TutorialStep {
  title: string;
  text: string;
  code?: string;
  language?: string;
  image?: string;
}

export interface TutorialSectionData {
  id: string;
  title: string;
  steps: TutorialStep[];
}

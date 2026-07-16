export interface Subject {
    id: number;
    name: string;
    examDate?: string;
    completedTopics: number;
    totalTopics: number;
}

export const defaultSubjects: Subject[] = [];
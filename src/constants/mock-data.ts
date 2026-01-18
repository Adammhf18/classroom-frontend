import {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        code: "CS101",
        department: "CS",
        description: "Fundamental concepts of programming and computer science.",
        createdAt: new Date("2024-01-10"),
    },
    {
        id: 2,
        name: "Calculus I",
        code: "MATH101",
        department: "Math",
        description: "Introduction to differential and integral calculus.",
        createdAt: new Date("2024-01-11"),
    },
    {
        id: 3,
        name: "English Literature",
        code: "ENG101",
        department: "English",
        description: "Survey of major works in English literature.",
        createdAt: new Date("2024-01-12"),
    }
];
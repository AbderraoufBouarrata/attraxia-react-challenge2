export type Invoice = {
    id: string;
    title: string;
    amount: number;
    dueDate: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
    status: 'Completed' | 'Pending' | 'Cancel';
};

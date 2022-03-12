export type CategoryForm = {
    id: number;
    name: string;
}

export type CategoryFormPage = {
    content: CategoryForm[],
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    first: boolean,
    numberOfElements: number,
    empty: boolean,
}

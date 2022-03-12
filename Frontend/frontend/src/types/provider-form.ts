export type ProviderForm = {

    id: number;
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    cellphone: string;
    address: string;
    contact: string;
    categories: number;
}

export type ProviderFormPage = {
    content: ProviderForm[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
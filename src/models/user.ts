export class UserModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public birthDate: string,
        public gender: Gender | null,
        public eMail: string,
        public isSubscripted: boolean,
        public userName: string,
        public password: string,
        public repeatedPassword: string,
        public accountType: AccountType | null
    ) {}
}

export enum Gender {
    'male' = 0,
    'female' = 1,
    'other' = 2,
    'prefer not to mention' = 3,
}

export enum AccountType {
    'personal' = 0,
    'pro' = 1,
    'business' = 2,
}

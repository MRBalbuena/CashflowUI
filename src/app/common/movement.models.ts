import { GroupedObservable } from 'rxjs';

export interface IMovementModel {
    date: Date;
    amount: number;
    user: string;
    bank: string;
    group: string;
    description: string;
}
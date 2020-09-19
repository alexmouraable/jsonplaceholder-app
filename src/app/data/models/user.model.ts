import { Address } from './address.model';
import { Company } from './company.model';
import { Statistics } from './statistics.model';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    statistics: Statistics;
}
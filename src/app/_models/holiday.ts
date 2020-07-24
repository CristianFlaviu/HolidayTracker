import { User } from './user';

export class Holiday {

    public startDate: Date;
    public endDate: Date;
    public user: User;

    constructor(startDate: Date, endDate: Date, user?: User)
    {
        this.startDate = startDate;
        this.endDate = endDate;
        this.user = user || null;
    }
}

import { UserTypes } from './userTypes.enum';
import { WorkTeams } from './workTeams.enum';
import { Holiday } from './holiday';

export class User {

    public username: string;
    public password: string;
    public userType: UserTypes;
    public team: WorkTeams;
    public holiday: Holiday;

    constructor(username: string, password: string, userTypes?: UserTypes, team?: WorkTeams, holiday?: Holiday){
        this.username = username;
        this.password = password;
        this.userType = userTypes || UserTypes.NormalUser;
        this.team = team || WorkTeams.Dev;
        this.holiday = holiday || null;
    }
}

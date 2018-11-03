export class Employee{

    name: string;
    dateofbirth: Date;
    recaptcha: string;

}

export class RecapResponse{

        success: boolean;
        challenge_ts: string;
        hostname: string;
}
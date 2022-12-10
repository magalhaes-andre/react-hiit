import { ITimeDigits } from "../../types/timeDigits";


export function timeToSeconds(time: String) {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;

    return hoursInSeconds + minutesInSeconds + Number(seconds);
}

export function timeToTimeDigits(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    /*  In order to be able to iterate in the way we will be doing, there is some changes to be done on tsconfig.json.
        This configurations is seeable at tsconfig.json, line 22. It is the 'downLevelIteration' attribute.
        TODO: Research on usability of downLevelIteration and how it is perceived over React's best practices.
    */

    /*  The below code aims at separating the string of the seconds and the minutes per digit.
        padStart is set at 2 because minutes and seconds should have 2 digits.
    
        TODO: Research on padStart method.
    */
    const [minutesLeftDigit, minutesRightDigit] = String(minutes).padStart(2, '0');
    const [secondsLeftDigit, secondsRightDigit] = String(seconds).padStart(2, '0');
    const timeDigits: ITimeDigits = {secondsLeftDigit, secondsRightDigit, minutesLeftDigit, minutesRightDigit};
    return timeDigits;
}   
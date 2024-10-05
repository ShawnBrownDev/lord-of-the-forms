import { allCities } from './all-cities';

// Validates if the provided email address is in a valid format.
export function isEmailValid(emailAddress: string) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return !!emailAddress.match(regex);
}

// Validates if the provided city is in the list of all cities.
export function isCityValid(city: string) {
    return allCities.map(c => c.toLowerCase()).includes(city.toLowerCase());
}

// Validates if the phone number is valid (7 digits).
export function isPhoneValid(phone: string) {
    return /^\d{7}$/.test(phone);
}

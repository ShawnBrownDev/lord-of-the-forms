export function capitalize(name: string) {
    return name
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Formats a phone number string into "NN-NN-NN-N".
export function formatPhone(phone: string) {
    return `${phone.slice(0, 2)}-${phone.slice(2, 4)}-${phone.slice(4, 6)}-${phone.slice(6)}`;
}

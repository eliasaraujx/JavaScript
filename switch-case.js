const expr = 'Papaya';
switch (expr) {
    case 'Orange':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
}
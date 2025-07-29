const stripeOverlay = document.querySelector('[data-stripe-overlay]');
const donateSection = document.querySelector('.donation-options');

const handleStripeEvents = (element) => {
    if (element) {
        const overlayClose = element.querySelector('[data-stripe-close]');
        const overlaySubmit = element.querySelector('[data-stripe-submit]');
        const overlaySelect = element.querySelector('[data-stripe-select]');

        if (!sessionStorage.getItem('stripe-inactive') || sessionStorage.getItem('stripe-inactive') !== 'true') {
            setTimeout(() => {
                element.classList.add('is-active');
            }, 3000);
        }

        if (overlayClose) {
            overlayClose.addEventListener('click', () => {
                element.classList.remove('is-active');
                sessionStorage.setItem('stripe-inactive', 'true');
            });
        }

        if (overlaySubmit) {
            overlaySubmit.addEventListener('click', () => {
                const selectedValue = overlaySelect.value;

                const stripeLinks = {
                    '1': 'https://buy.stripe.com/3cs28H0m5bDRg485kq', // 10 lei one-time
                    '2': 'https://buy.stripe.com/cN2fZx1q923h2di14b', // 10 lei subscription
                    '3': 'https://buy.stripe.com/eVa14D1q98rFg48bIM', // 25 lei one-time
                    '4': 'https://buy.stripe.com/aEUeVt5Gp4bp2difZ6', // 25 lei subscription
                    '5': 'https://buy.stripe.com/4gw28H4Cl5ft7xC6ot', // 50 lei one-time
                    '6': 'https://buy.stripe.com/bIY3cLb0J5ftcRWaEN', // 50 lei subscription
                    '7': 'https://buy.stripe.com/3csaFd2udgYb6ty4gq', // 100 lei one-time
                    '8': 'https://buy.stripe.com/00geVtb0J8rFf049AL', // 100 lei subscription
                    '9': 'https://buy.stripe.com/4gwaFd8SBgYb05afZa', // 300 lei one-time
                    '10': 'https://buy.stripe.com/9AQ00z9WFdLZ19ebIV', // 300 lei subscription
                    '11': 'https://buy.stripe.com/cN2dRpecVdLZf04fZc', // 500 lei one-time
                    '12': 'https://buy.stripe.com/3cs5kTc4N6jx05a28n', // 500 lei subscription
                };

                if (stripeLinks[selectedValue]) {
                    window.open(stripeLinks[selectedValue], '_blank');
                } else {
                    console.log('Nu este suma selectata');
                }
            });
        }
    }
};

// Apply the event listeners to both elements if they exist
handleStripeEvents(stripeOverlay);
handleStripeEvents(donateSection);

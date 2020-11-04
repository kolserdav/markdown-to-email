const React = require('react');

const UnsubscribeStyles = {
    'mso-line-height-rule': 'exactly',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
    'color': '#656565',
    'font-weight': 'normal',
    'text-decoration': 'underline'
}

const Unsubscribe = () => {
    return (
        <a href="*|UNSUB|*" style={UnsubscribeStyles}>
            unsubscribe
        </a>
    );
}
module.exports = Unsubscribe;

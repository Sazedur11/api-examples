const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = content => {
    const addContent = document.getElementById('content');
    addContent.innerText = content.quote;
}


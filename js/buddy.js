const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}

loadBuddy()

const displayBuddy = content => {
    console.log(content)
    const buddies = content.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `
            Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
            Gender: ${buddy.gender}
            Email: ${buddy.email}
            Id: ${buddy.id.value}
            Location: ${buddy.location.city}
        `
        buddiesDiv.appendChild(p)
    }
}
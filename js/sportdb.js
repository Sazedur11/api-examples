const searchTeam = async () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    const emtyfiled = document.getElementById('emty-field');
    if (inputText == '') {
        emtyfiled.innerHTML = '<p class=" p-5 bg-warning text-center">Baby Type Something</p>';
    }
    else {
        const singleTeam = document.getElementById('single-team');
        singleTeam.textContent = '';
        emtyfiled.innerText = '';
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputText}`;
        const res = await fetch(url);
        const data = await res.json();
        displayTeamResult(data.teams)
    }
}
// searchTeam()

/* search team result */
const displayTeamResult = teams => {
    // console.log(teams)
    const teamResult = document.getElementById('search-result');
    teamResult.innerHTML = '';
    // error message 
    if (teams == null) {
        const errorMessage = document.getElementById('error-team-details');
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = `<p class=" p-5 bg-danger text-center text-white">Result Not Found</p>`
        teamResult.appendChild(div)
    }
    else {
        teams.forEach(team => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="teamDetails(${team.idTeam})" class="card">
                <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
                <div class="card-body h-100">
                    <h5 class="card-title">${team.strTeam}</h5>
                    <p class="card-text ">${team.strDescriptionEN.slice(0, 100)}</p>
                </div>
            </div>
            `
            teamResult.appendChild(div)
        })
    }

}


/* single team details */
const teamDetails = async teamId => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    const res = await fetch(url);
    const data = await res.json();
    displaySingleTeam(data.teams[0])
}
const displaySingleTeam = team => {
    console.log(team)
    const singleTeam = document.getElementById('single-team');
    singleTeam.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${team.strCountry}</h5>
            <p class="card-text ">${team.strDescriptionEN.slice(0, 100)}</p>
            <a href="#" class="btn btn-primary ">Go somewhere</a>
        </div>
    `;
    singleTeam.appendChild(div)

}
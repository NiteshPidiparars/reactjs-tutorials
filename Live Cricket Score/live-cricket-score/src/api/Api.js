const API_KEY = "2bWLQ0ucHNXoD9t5E2PwGYiMjlL2";

//get all the matches [upcomming matches]

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("ERROR : ", error));
}

//load match details
export const getMatcheDetail = (id) => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("ERROR : ", error));
}
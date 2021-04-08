const redditUrl = 'https://www.reddit.com';

export const getSubReddits = async () => {
    const url = redditUrl + '/subreddits.json';
    const response = await fetch(url);
    const json = await response.json();
    const jsonResponse = json.data.children.map( subReddit => subReddit.data);
    console.log(jsonResponse);
    return jsonResponse;
}


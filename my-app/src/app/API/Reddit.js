const redditUrl = 'https://www.reddit.com/';

export const getSubReddits = async () => {
    const url = redditUrl + 'subreddits.json';
    
    const response = await fetch(url);
    const json = await response.json();
    const subRedditsList = json.data.children.map( subReddit => subReddit.data);
    // console.log(subRedditsList); //test
    return subRedditsList;
};

export const getSubredditPosts = async (subreddit) => {
    const url = redditUrl + `${subreddit}.json`;
    
    const response = await fetch(url);
    const json = await response.json();
    const subRedditData = json.data.children.map((post) => post.data);
    // console.log(subRedditData); //test
    return subRedditData;
  };
//   getSubredditPosts("/r/Home/");

  export const getPostComments = async (permalink) => {
    const url = redditUrl + `${permalink}.json`;

    const response = await fetch(url);
    const json = await response.json();
    const postComments = json[1].data.children.map((subreddit) => subreddit.data);
    // console.log(postComments); //test
    return postComments;
  };
  //getPostComments("/r/Home/comments/mp5wef/washer_to_regular_outlet/");


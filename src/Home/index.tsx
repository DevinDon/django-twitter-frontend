import { TweetModel } from '../common/apis/tweets';
import TweetCard from '../common/components/Timeline/TweetCard';

export const Home = () => {

  const tweets: TweetModel[] = [
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 1,
      date: "2020-10-24T00:43:06.829Z",
      content: "这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容。",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 2,
      date: "2020-10-24T00:43:06.829Z",
      content: "这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容。",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 3,
      date: "2020-10-24T00:43:06.829Z",
      content: "这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容。",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 4,
      date: "2020-10-24T00:43:06.829Z",
      content: "这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容。",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 5,
      date: "2020-10-24T00:43:06.829Z",
      content: "这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容。",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 6,
      date: "2020-10-24T00:43:06.829Z",
      content: "这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容，这里是推文正文内容。",
      like_count: 987,
      comment_count: 654
    }
  ];

  return <>
    {
      tweets.length
        ? tweets.map(tweet => <TweetCard key={tweet.id} tweet={tweet}></TweetCard>)
        : <div>空的</div>
    }
  </>;

}

export default Home;

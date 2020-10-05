import React from "react";
import "./css/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        message="Woooooaaahhh! this is working 🤯😲"
        timestamp="This is the timestamp"
        username="anamika212"
        image="https://media.giphy.com/media/TIRlx3Fzi1A7L2d5z7/giphy.gif"
      />
      <Post
        profilePic="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        message="Learning HTML and Going to crush it 🔥🔥🔥"
        timestamp="This is the timestamp"
        username="anamika212"
        image="https://media.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif"
      />
      <Post
        profilePic="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        message="I love reading books 😚"
        timestamp="This is the timestamp"
        username="anamika212"
        image="https://media.giphy.com/media/ZkwSxuckDvf7q/giphy.gif"
      />
    </div>
  );
};

export default Feed;

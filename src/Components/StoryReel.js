import React from "react";
import "./css/StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/* story >> img, profilepic, title */}
      <Story
        image="https://images.unsplash.com/photo-1601753657684-cefd5aa6f284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        profileSrc="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        title="Anamika Mishra"
      />
      <Story
        image="https://images.unsplash.com/photo-1601809103137-60c18b484bbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        profileSrc="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        title="Anamika Mishra"
      />
      <Story
        image="https://images.unsplash.com/photo-1601677237215-c9a8f0747b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        title="Anamika Mishra"
      />
      <Story
        image="https://images.unsplash.com/photo-1601650538731-55e2ab3ed5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        profileSrc="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        title="Anamika Mishra"
      />
      <Story
        image="https://images.unsplash.com/photo-1601743383597-c24974f7112b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        profileSrc="https://yt3.ggpht.com/a/AATXAJzkQd5Pg78Oeze5kwjoIL4QdXkieIwEOC_Nlir1bg=s88-c-k-c0x00ffffff-no-rj"
        title="Anamika Mishra"
      />
    </div>
  );
};

export default StoryReel;

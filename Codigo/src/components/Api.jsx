import PageTitle from "./PageTitle";
import { useEffect, useState } from "react";
import { CardWithLink } from "./CardRepository";
import { ProfileCard } from "./Card";

function Api() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ArtMix532/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ArtMix532")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/ArtMix532/repos")
  //     .then((response) => response.json())
  //     .then((data) => setTopics(data));
  // }, []);

  return (
    <div id="Portfolio" className="pb-10 w-screen bg-slate-300 px-32">
      <PageTitle title="Repositories" />
      <div className="flex justify-center">
        <ProfileCard
          Name={profile.name}
          Img={profile.avatar_url}
          Url={profile.html_url}
        />
      </div>
      {/* <div className="grid grid-cols-3 gap-12 w-full content-center">
        {repositories.map((repository) => (
          <CardWithLink
            Title={repository.name}
            Url={repository.html_url}
            Description={repository.description}
            Tags={repository.topics}
            key={repository.id}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Api;

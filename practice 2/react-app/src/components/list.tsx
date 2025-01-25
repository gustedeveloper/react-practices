import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Member {
  login: string;
  id: string;
  avatar_url: string;
}

export const ListPage = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  });

  return (
    <>
      <h1>List Page</h1>
      <Link to="/detail">Navigate to Detail Page</Link>
      <div>
        {members.map((member) => (
          <div key={member.id}>
            <span>{member.login}</span>
            <img src={member.avatar_url} />
          </div>
        ))}
      </div>
    </>
  );
};

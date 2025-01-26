import { useEffect, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import "./list.scss";

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
      <div className="list-user-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">ID</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={generatePath("/detail/:id", { id: member.login })}>
              {member.login}
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

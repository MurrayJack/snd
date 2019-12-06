import Leaf from "./Leaf";
import Folder from "./Folder";

export default ({ Items }) => {
  return (
    <>
      <div>
        <ul>
          {Items.map(e => (
            <li>
              {e.Folder ? (
                <Folder>{e.Caption}</Folder>
              ) : (
                <Leaf>{e.Caption}</Leaf>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        li {
          padding: 8px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
};

import Leaf from "./Leaf";
import Folder from "./Folder";

export default ({ Items }) => {
  return (
    <>
      <div>
        <ul>
          {Items.map((e, i) => (
            <li key={e.Caption + i}>
              {e.Folder ? <Folder Item={e} /> : <Leaf Item={e} />}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        div {
        }

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

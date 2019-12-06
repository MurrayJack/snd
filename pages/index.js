const items = [
  {
    Caption: "Item 1",
    Folder: true,
    children: [
      {
        Caption: "Item 2"
      },
      {
        Caption: "Item 2"
      }
    ]
  },
  {
    Caption: "Item 2"
  },
  {
    Caption: "Item 2"
  }
];

/*
  Modes
  1) closed
  2) search
  3) browse
*/

const Folder = ({ children }) => <>{children} &gt;</>;
const Leaf = ({ children }) => <>{children}</>;

export default () => (
  <div>
    <div className="control">
      <div>
        <input />
        <button>O</button>
      </div>
      <div>
        <ul>
          {items.map(e => (
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
    </div>

    <style jsx>{`
      .control > div {
        border: 1px solid #ddd;
        width: 100%;
      }
    `}</style>
  </div>
);

import DocumentIcon from "./DocumentIcon";

export default ({ Item }) => (
  <>
    <div>
      <DocumentIcon />
      <span>{Item.Caption}</span>
    </div>

    <style jsx>{`
      div {
        height: 40px;
        display: grid;
        align-items: center;
        padding: 0 16px;
        grid-template-columns: 30px auto;
      }

      div:hover {
        background: #0075db;
        color: white;
      }
    `}</style>
  </>
);

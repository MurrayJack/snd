import FolderIcon from "./FolderIcon";
import ArrowRightIcon from "./ArrowRightIcon";

export default ({ Item }) => (
  <>
    <div>
      <FolderIcon />
      <span>{Item.Caption}</span>
      <ArrowRightIcon />
    </div>

    <style jsx>{`
      div {
        height: 40px;
        display: grid;
        align-items: center;
        padding: 0 16px;
        grid-template-columns: 30px auto 30px;
      }

      div:hover {
        background: #0075db;
        color: white;
      }
    `}</style>
  </>
);

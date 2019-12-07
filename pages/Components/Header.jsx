import SearchIcon from "./SearchIcon";
import CrossIcon from "./CrossIcon";

export default ({ HasValue, Placeholder, ValueDescription }) => {
  return (
    <>
      <>
        {!HasValue ? (
          <div tabIndex={0}>
            <span>{Placeholder}</span>
            <button>
              <SearchIcon />
            </button>
          </div>
        ) : (
          <div tabIndex={0}>
            <span>{ValueDescription}</span>
            <button>
              <CrossIcon />
            </button>
          </div>
        )}

        <style jsx>{`
          div {
            background: #f6f8fa;
            border-radius: 4px;
            height: 40px;
            padding-left: 16px;
            display: grid;
            align-items: center;
            grid-template-columns: auto 30px;
            font-family: Roboto;
          }

          div > span {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 1.3em;
            display: flex;
            align-items: center;
            letter-spacing: 0.02em;
            color: #566878;
          }
        `}</style>
      </>
    </>
  );
};

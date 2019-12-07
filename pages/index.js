import items from "./Data";
import SND from "./Components/SND";

export default () => (
  <>
    <SND Items={items} Placeholder="Please Select" />
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
    `}</style>
  </>
);

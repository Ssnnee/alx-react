import { getFooterCopy, getFullYear } from "../utils/utils";

export const Footer = () => {
  return (
      <footer className='App-footer'>
        <p> <i>Copyright {getFullYear()} </i> - {getFooterCopy(true)} </p>
      </footer>
  );
};

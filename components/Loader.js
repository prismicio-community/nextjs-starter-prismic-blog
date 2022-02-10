import { loaderStyles } from "styles";

/**
 * A loading indicator.
 */
export const Loader = () => {
  return (
    <div className="loader">
      <div className="ldsRipple" />
      <style jsx global>
        {loaderStyles}
      </style>
    </div>
  );
};

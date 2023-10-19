import { useEffect, useState, createContext } from "react";

const Context = createContext();

const Provides = ({ children }) => {
  const [isServiceActive, setIsServiceActive] = useState(true);
  const [isProductActive, setIsProductActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);

  // service storage
  useEffect(() => {
    const data = window.sessionStorage.getItem("serviceReload");
    if (data !== null) setIsServiceActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      "serviceReload",
      JSON.stringify(isServiceActive)
    );
  }, [isServiceActive]);
  // product storage
  useEffect(() => {
    const data = window.sessionStorage.getItem("productReload");
    if (data !== null) setIsProductActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      "productReload",
      JSON.stringify(isProductActive)
    );
  }, [isProductActive]);

  // project storage
  useEffect(() => {
    const data = window.sessionStorage.getItem("projectReload");
    if (data !== null) setIsProjectActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      "projectReload",
      JSON.stringify(isProjectActive)
    );
  }, [isProjectActive]);

  //career storage
  useEffect(() => {
    const data = window.sessionStorage.getItem("careerReload");
    if (data !== null) setIsCareerActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      "careerReload",
      JSON.stringify(isCareerActive)
    );
  }, [isCareerActive]);

  return (
    <Context.Provider
      value={{
        isServiceActive,
        setIsServiceActive,
        isProductActive,
        setIsProductActive,
        isProjectActive,
        setIsProjectActive,
        isCareerActive,
        setIsCareerActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, Provides };

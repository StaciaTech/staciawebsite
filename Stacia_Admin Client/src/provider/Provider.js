import { useState, createContext, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [isOverviewActive, setIsOverviewActive] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);
  const [isProductActive, setIsProductActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isArticleActive, setisArticleActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);
  const [isCasestudyActive, setIsCasestudyActive] = useState(false);
  const [isStaciawallActive, setIsStaciawallActive] = useState(false);

  useEffect(() => {
    setIsOverviewActive(true);
  }, []);

  return (
    <Context.Provider
      value={{
        isArticleActive,
        setIsStaciawallActive,
        isStaciawallActive,
        setIsCasestudyActive,
        isCasestudyActive,
        setIsCareerActive,
        isCareerActive,
        setisArticleActive,
        setIsProjectActive,
        isProjectActive,
        setIsProductActive,
        isProductActive,
        setIsServiceActive,
        isServiceActive,
        setIsOverviewActive,
        isOverviewActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, Provider };

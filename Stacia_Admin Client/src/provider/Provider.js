import { useState, createContext, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [isOverviewActive, setIsOverviewActive] = useState(true);
  const [isServiceActive, setIsServiceActive] = useState(false);
  const [isProductActive, setIsProductActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isArticleActive, setisArticleActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);
  const [isCasestudyActive, setIsCasestudyActive] = useState(false);
  const [isStaciawallActive, setIsStaciawallActive] = useState(false);

  // overView storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('overviewReload');
    if (data !== null) setIsOverviewActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'overviewReload',
      JSON.stringify(isOverviewActive)
    );
  }, [isOverviewActive]);

  // service storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('serviceReload');
    if (data !== null) setIsServiceActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'serviceReload',
      JSON.stringify(isServiceActive)
    );
  }, [isServiceActive]);

  // product storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('productReload');
    if (data !== null) setIsProductActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'productReload',
      JSON.stringify(isProductActive)
    );
  }, [isProductActive]);

  // project storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('projectReload');
    if (data !== null) setIsProjectActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'projectReload',
      JSON.stringify(isProjectActive)
    );
  }, [isProjectActive]);

  // article storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('articleReload');
    if (data !== null) setisArticleActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'articleReload',
      JSON.stringify(isArticleActive)
    );
  }, [isArticleActive]);

  // career storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('careerReload');
    if (data !== null) setIsCareerActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'careerReload',
      JSON.stringify(isCareerActive)
    );
  }, [isCareerActive]);

  // casestudy storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('casestudyReload');
    if (data !== null) setIsCasestudyActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'casestudyReload',
      JSON.stringify(isCasestudyActive)
    );
  }, [isCasestudyActive]);

  // career storage
  useEffect(() => {
    const data = window.sessionStorage.getItem('staciawallReload');
    if (data !== null) setIsStaciawallActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(
      'staciawallReload',
      JSON.stringify(isStaciawallActive)
    );
  }, [isStaciawallActive]);

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

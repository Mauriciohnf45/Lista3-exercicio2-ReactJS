import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Olá do componente pai!";

  return (
    <div>
      <h1>Componente Pai</h1>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;

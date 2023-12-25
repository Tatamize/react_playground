import React from 'react';
import ReactDOM from 'react-dom/client';
import "../shared/interface/AccountProps.tsx"


export const DetailAccount: React.FC = () => {
 
  const detail : ReactDOM.Root = ReactDOM.createRoot(document.getElementById('detail')!);

  detail.render(
    <div id="detailbox">
      <div>hello</div>
      <button onClick={() => document.getElementById('detailbox')!.remove()}>close</button>
    </div>
  );


  return (
    <>
    </>
  );


};

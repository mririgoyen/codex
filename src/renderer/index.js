import React from 'react';
import ReactDOM from 'react-dom';
// import '@openfonts/zcool-qingke-huangyou_chinese-simplified';

import App from '@/components/App/App';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

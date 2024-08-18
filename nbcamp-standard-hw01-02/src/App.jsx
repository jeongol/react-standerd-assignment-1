import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header title="과제 2단계 컴포넌트 연도 설정" />
      <Content />
      <Footer year={2024} />
    </div>
  );
}

export default App;

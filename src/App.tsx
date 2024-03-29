import React from 'react';
import GlobalStyles from './styles/global';
import {Main, Section, Sticky} from './styles/index';
import FirstAndSecond from './components/FirstAndSecond';

function App() {
  return (
    <>
      <GlobalStyles />

      <Main style={{  height: '1610vh'}}>
        <Section style={{  height: '72.7%'}}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky  className="third"/>
        </Section>
        
        <Section style={{ }}>
          <Sticky  className="fourth"/>
        </Section>
      </Main>
    </>
  );
}

export default App;

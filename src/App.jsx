import './App.css'
import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import FeedBackSection from './components/FeedBackSection/FeedBackSection'
import { useState } from 'react'
import { styled } from 'styled-components'

const MainContainer = styled.main`
  padding: 10px 30px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 95px;
`
export default function App() {
  const [tab, setTab] = useState('main')
  
  return (
    <>
      <Header /> 
      <MainContainer>
        <IntroSection />
        <TabsSection 
          active={tab}
          onClick={(current) => setTab(current)} 
        />

        { 
          tab === 'main' && (
            <>
              <TeachingSection />
              <DifferencesSection title="How are we different from others" />
            </>
          )
        }
        
        {
          tab === 'feedback' && <FeedBackSection />
        }

      </MainContainer>
    </>
  )
}
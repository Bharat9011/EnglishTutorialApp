import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import ContactUs from './pages/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import Introducation from './component/Introducation'
import LevelOneIntroducation from './component/Level1/Introducation'
import MainLevelList from './component/Level1/Levels/MainLevelList'
import BeForm from './component/Level1/Levels/BeFromLevelList'
import WHQuestion from './component/Level1/Levels/WhQuestionList'
import Tense from './component/Level1/Levels/Tense'
import BeFormIntro from './component/Level1/Levels/BeForm/BeFromIntroducation';
import PositiveStatment from './component/Level1/Levels/BeForm/PositiveStatement';
import NegativeStatment from './component/Level1/Levels/BeForm/NegativeStatment';
import PositiveQuestion from './component/Level1/Levels/BeForm/PositiveQuestion';
import NegitiveQuestion from './component/Level1/Levels/BeForm/NegativeQuestion';
import WhIntro from './component/Level1/Levels/WhQuestion/WhQuestionIntroducation';
import BeFormPostiveQuestion from './component/Level1/Levels/WhQuestion/BeFormPositiveWhQuestion';
import BeFormNegativeQuestion from './component/Level1/Levels/WhQuestion/BeFormNagativeWhQuestion';
import PositiveWhQuestion from './component/Level1/Levels/WhQuestion/PositiveWhQuestion';
import NegativeWhQuestion from './component/Level1/Levels/WhQuestion/NegativeWhQuestion';
import TenseIntroducation from './component/Level1/Levels/Tense/Introduction';
import TenseSimpleTense from './component/Level1/Levels/Tense/SimpleTense';
import TenseContinuesTense from './component/Level1/Levels/Tense/ContinuesTense';
import TensePrefectTense from './component/Level1/Levels/Tense/PrefectTense';
import TensePrefectContinuesTense from './component/Level1/Levels/Tense/PrefectContinuesTense';
import TensePositiveTenseQuestion from './component/Level1/Levels/Tense/PositiveTenseQuestion';
import TenseNegativeTenseQuestion from './component/Level1/Levels/Tense/NegativeTenseQuestion';
import TenseWHPositiveTenseQuestion from './component/Level1/Levels/Tense/WHPositiveTenseQuestion';
import TenseWHNegativeTenseQuestion from './component/Level1/Levels/Tense/WHNegativeTenseQuestion';
import Level2List from './component/Level2/Level2List';
import IntroducationLevel2 from './component/Level2/IntroducationLevel2';
import ModelVerb from './component/Level2/ModelVerb';
import Structure from './component/Level2/Structure';
import MBPositiveStatement from './component/Level2/ModelVerb/PositiveStatement';
import MBNegativeStatement from './component/Level2/ModelVerb/NegativeStatement';
import MBPositiveQuestion from './component/Level2/ModelVerb/PositiveQuestion';
import MBNegativeQuestion from './component/Level2/ModelVerb/NegativeQuestion';
import MBWHPositiveQuestion from './component/Level2/ModelVerb/WHPositiveQuestion';
import MBWHNegativeQuestion from './component/Level2/ModelVerb/WHNegativeQuestion';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index={true} element={<Introducation />} />
            <Route path='/MainLevelList' element={<MainLevelList />} />
            <Route path='/MainLevelList/Introducation' element={<LevelOneIntroducation />} />

            {/* BeForm Component */}

            <Route path='/MainLevelList/BeFromLevelList' element={<BeForm />} />

            <Route path='/MainLevelList/BeFromLevelList/BeFormIntroducation' element={<BeFormIntro />} />
            <Route path='/MainLevelList/BeFromLevelList/PositiveStatement' element={<PositiveStatment />} />
            <Route path='/MainLevelList/BeFromLevelList/NegativeStatment' element={<NegativeStatment />} />
            <Route path='/MainLevelList/BeFromLevelList/PositiveQuestion' element={<PositiveQuestion />} />
            <Route path='/MainLevelList/BeFromLevelList/NegativeQuestion' element={<NegitiveQuestion />} />

            {/* Wh Question */}

            <Route path='/MainLevelList/WhQuestion' element={<WHQuestion />} />
            <Route path='/MainLevelList/WhQuestion/WhQuestionIntroducation' element={<WhIntro />} />
            <Route path='/MainLevelList/WhQuestion/PositiveWhQuestion' element={<PositiveWhQuestion />} />
            <Route path='/MainLevelList/WhQuestion/NegativeWhQuestion' element={<NegativeWhQuestion />} />
            <Route path='/MainLevelList/WhQuestion/BeFormPositiveWhQuestion' element={<BeFormPostiveQuestion />} />
            <Route path='/MainLevelList/WhQuestion/BeFormNagativeWhQuestion' element={<BeFormNegativeQuestion />} />

            {/* Tense */}
            <Route path='/MainLevelList/Tense' element={<Tense />} />

            <Route path='/MainLevelList/Tense/Introduction' element={<TenseIntroducation />} />
            <Route path='/MainLevelList/Tense/SimpleTense' element={<TenseSimpleTense />} />
            <Route path='/MainLevelList/Tense/ContinuesTense' element={<TenseContinuesTense />} />
            <Route path='/MainLevelList/Tense/PrefectTense' element={<TensePrefectTense />} />
            <Route path='/MainLevelList/Tense/PrefectContinuesTense' element={<TensePrefectContinuesTense />} />
            <Route path='/MainLevelList/Tense/PositiveTenseQuestion' element={<TensePositiveTenseQuestion />} />
            <Route path='/MainLevelList/Tense/NegativeTenseQuestion' element={<TenseNegativeTenseQuestion />} />
            <Route path='/MainLevelList/Tense/WHPositiveTenseQuestion' element={<TenseWHPositiveTenseQuestion />} />
            <Route path='/MainLevelList/Tense/WHNegativeTenseQuestion' element={<TenseWHNegativeTenseQuestion />} />

            {/* Level 2 */}

            <Route path='/Level2List' element={<Level2List />} />
            <Route path='/Level2List/IntroducationLevel2' element={<IntroducationLevel2 />} />
            
            <Route path='/Level2List/ModelVerb' element={<ModelVerb />} />
            
            <Route path='/Level2List/ModelVerb/Introducation' element={<IntroducationLevel2 />} />
            <Route path='/Level2List/ModelVerb/PositiveStatement' element={<MBPositiveStatement />} />
            <Route path='/Level2List/ModelVerb/NegativeStatement' element={<MBNegativeStatement />} />
            <Route path='/Level2List/ModelVerb/PositiveQuestion' element={<MBPositiveQuestion />} />
            <Route path='/Level2List/ModelVerb/NegativeQuestion' element={<MBNegativeQuestion />} />
            <Route path='/Level2List/ModelVerb/WHPositiveQuestion' element={<MBWHPositiveQuestion />} />
            <Route path='/Level2List/ModelVerb/WHNegativeQuestion' element={<MBWHNegativeQuestion />} />
            
            <Route path='/Level2List/Structure' element={<Structure />} />

          </Route>
          <Route path='/AboutUs' element={<Aboutus />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
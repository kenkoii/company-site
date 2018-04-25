import React from 'react'
import Link from 'gatsby-link'
import Banner from '../components/wordcosmos/banner';
import BattleToLearn from '../components/wordcosmos/BattleToLearn';
import UnlockPossibilities from '../components/wordcosmos/UnlockPossibilities';
import QuestionSystem from '../components/wordcosmos/QuestionSystem';
import MadeForLearning from '../components/wordcosmos/MadeForLearning';

const WordCosmosPage = () => (
  <div>
    <Banner/>
    <BattleToLearn />
    <UnlockPossibilities />
    <QuestionSystem />
    <MadeForLearning />
  </div>
)

export default WordCosmosPage

import TopFailedAssertions from './components/TopFailedAssertions'
import TopFailedPredictions from './components/TopFailedPredictions'
import PredictionSettings from './components/PredictionSettings'
import SplitDemographics from './components/SplitDemographics'
import SplitProperty from './components/SplitProperty'
import ChangeTimeline from './components/ChangeTimeline'
import CorrectnessVsTime from './components/CorrectnessVsTime'

export default function Homepage () {
  return (
    <div className='homepage'>

      <div className='row-1'>
        <TopFailedAssertions />
        <TopFailedPredictions />
      </div>

      <div className='row-2'>
        <div className='left-panel'>
          <PredictionSettings />
          <ChangeTimeline />
        </div>

        <div className='right-panel'>
          <SplitDemographics />
          <SplitProperty />
          <CorrectnessVsTime />
        </div>
      </div>

      <style jsx>{`
        .homepage {
          display: grid;
          row-gap: 2em;

          padding: 1.5em;
          box-sizing: border-box;
        }

        .row-1 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 2em;
        }

        .row-2 {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-column-gap: 2em;
        }

        .row-2 .left-panel {
          display: flex;
          flex-direction: column;
        }

        .row-2 .left-panel > :global(div) {
          margin-bottom: 1em;
        }

        .row-2 .right-panel > :global(div) {
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  )
}

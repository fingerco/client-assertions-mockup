import failedPredictions from '../../../assets/failedPredictions.json'
import * as React from 'react'

export default function TopFailures () {
  const failuresDesc = Object.keys(failedPredictions).sort((a, b) => failedPredictions[b].failures - failedPredictions[a].failures)

  return (
    <div className='top-failures'>

      <div className='header'>
        <h2>Top Failed Predictions</h2>

        <div className='criteria'>
          <span>by count</span>
          <span className='separator'>&nbsp;|&nbsp;</span>
          <span className='selected'>by frequency</span>
          <span className='separator'>&nbsp;|&nbsp;</span>
          <span>by percentage</span>
        </div>
      </div>

      {failuresDesc.map((failure) => (
        <div key={failure} className={`failure ${failure === 'signup_without_logging_in' ? 'selected' : ''}`}>
          <div className='name'>{failure}</div>
          <div className='count'>{failedPredictions[failure].failures} samples this month</div>
        </div>
      ))}

      <div className='footer'>
        <a href='#'>See All</a>
      </div>

      <style jsx>{`
        .top-failures {
          width: 100%;
          height: 100%;
          background-color: #f5f7ff;

          padding: 1em;
          box-sizing: border-box;
          border-radius: 3px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1em;
        }

        .criteria .selected {
          font-weight: bold;
        }

        .failure {
          display: flex;
          justify-content: space-between;
          align-items: center;

          border-bottom: 1px solid #cecece;
          padding: 1em 0.5em;
        }

        .failure.selected {
          background-color: #41c39f;
          color: white;
        }

        .failure .name {
          font-size: 1.3rem;
        }

        .failure .count {
          font-weight: bold;
        }

        .footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 2em;
        }
      `}</style>
    </div>
  )
}

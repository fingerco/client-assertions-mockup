import * as React from 'react'

export default function CorrectnessVsTime () {
  return (
    <div className='correctness-vs-time'>
      <div className='header'>
        <h2>Correctness VS Time</h2>
        <select value="source-ad-campaign">
          <option value="source-ad-campaign">Source Ad Campaign</option>
        </select>
      </div>

      <div className='correctness-data'>
      </div>

      <div className='footer'>
        <a href='#'>More Property Breakdowns</a>
      </div>

      <style jsx>{`
        .correctness-vs-time {
          width: 100%;
          background-color: #f5f7ff;

          padding: 1em;
          box-sizing: border-box;
          border-radius: 3px;
        }

        .correctness-data {
          height: 20em;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1em;
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

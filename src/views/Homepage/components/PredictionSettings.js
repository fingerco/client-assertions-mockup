import * as React from 'react'

export default function PredictionSettings () {
  return (
    <div className='prediction-settings'>

      <div className='header'>
        <h2>Prediction Settings</h2>
        <h4>signup_without_logging_in</h4>
      </div>

      <div className='section'>
        <h3>Description</h3>
        <p>We predict that users that sign up will eventually login to use the tool</p>
      </div>

      <div className='section'>
        <h3>Time Limit</h3>
        <p>Users have <b>1 day</b> to fulfill this prediction</p>
      </div>

      <div className='section'>
        <h3>Alerts</h3>
        <p>An alert will fire when the rolling success rate of this prediction <b>falls below 80%</b>. <br /> Last alerted on <b>08/05/2020</b>, dropped to <b>64%</b> - Current success rate is <b>95%</b></p>
      </div>

      <div className='section'>
        <h3>Related Events</h3>
        <p>
          <a href='#'>Launch of Dashboard 2.0</a> <br />
          <a href='#'>Revert of Dashboard 2.0</a>
        </p>
      </div>

      <div className='footer'>
        <a href='#'>Edit Settings</a>
      </div>

      <style jsx>{`
        .prediction-settings {
          width: 100%;
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

        .section :global(a) {
          color: black;
        }

        .section h3 {
          margin-bottom: 0;
        }

        .section p {
          margin-top: 0.5em;
          line-height: 1.5em;
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

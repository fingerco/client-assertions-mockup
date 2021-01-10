import * as React from 'react'

export default function ChangeTimeline () {
  return (
    <div className='change-timeline'>
      <div className='header'>
        <h2>Recent Changes</h2>
      </div>

      <div className='changes'>
        <div className='change'>
          <a href='#'><h3>Price cut to $20 a month</h3></a>
          <b>07/02/2020</b>
        </div>

        <div className='change'>
          <a href='#'><h3>Launch of Dashboard 2.0</h3></a>
          <b>09/01/2020</b>
        </div>

        <div className='change'>
          <a href='#'><h3>Revert of Dashboard 2.0</h3></a>
          <b>09/08/2020</b>
        </div>

        <div className='change'>
          <a href='#'><h3>AWS Outage</h3></a>
          <b>09/23/2020</b>
        </div>

        <div className='change'>
          <a href='#'><h3>The Great SurveyMonkey Failure</h3></a>
          <b>09/30/2020</b>
        </div>
      </div>

      <div className='footer'>
        <a href='#'>Investigate Changes</a>
      </div>

      <style jsx>{`
        .change-timeline {
          width: 100%;
          background-color: #f5f7ff;

          padding: 1em;
          box-sizing: border-box;
          border-radius: 3px;
        }

        .change {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .change a {
          color: black;
        }

        .change h3 {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1em;
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

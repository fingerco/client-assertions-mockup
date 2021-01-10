import * as React from 'react'
import { FaInternetExplorer, FaFirefoxBrowser, FaChrome, FaOpera, FaSafari } from "react-icons/fa"

export default function SplitDemographics () {
  return (
    <div className='split-demographics'>
      <div className='header'>
        <h2>Split by Demographic</h2>
        <select value="browser">
          <option value="region">Region</option>
          <option value="browser">Browser</option>
          <option value="browser-version">Browser Version</option>
          <option value="device">Device</option>
          <option value="os">Operating System</option>
          <option value="os-version">Operating System Version</option>
        </select>
      </div>

      <div className='demographics'>
        <div className='demographic'>
          <div className='name'><FaInternetExplorer color='blue' /> Internet Explorer</div>
          <div className='count'>40 people</div>
          <div className='percentage'>40%</div>
        </div>

        <div className='demographic'>
          <div className='name'><FaFirefoxBrowser color='darkorange' /> Firefox</div>
          <div className='count'>32 people</div>
          <div className='percentage'>32%</div>
        </div>

        <div className='demographic'>
          <div className='name'><FaSafari color='skyblue' /> Safari</div>
          <div className='count'>16 people</div>
          <div className='percentage'>16%</div>
        </div>

        <div className='demographic'>
          <div className='name'><FaOpera color='red' /> Opera</div>
          <div className='count'>9 people</div>
          <div className='percentage'>9%</div>
        </div>

        <div className='demographic'>
          <div className='name'><FaChrome color='green' /> Chrome</div>
          <div className='count'>3 people</div>
          <div className='percentage'>3%</div>
        </div>
      </div>

      <div className='footer'>
        <a href='#'>More Demographic Breakdowns</a>
      </div>

      <style jsx>{`
        .split-demographics {
          width: 100%;
          background-color: #f5f7ff;

          padding: 1em;
          box-sizing: border-box;
          border-radius: 3px;
        }

        .demographic {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding-bottom: 0.5em;
          padding-top: 0.5em;
          border-bottom: 1px solid #cecece;
        }

        .demographic .name {
          display: flex;
          align-items: center;
          font-weight: bold;
        }

        .demographic .name :global(svg) {
          margin-right: 0.5em;
        }

        .demographic .count {
          text-align: center;
          margin: auto auto;
        }

        .demographic .percentage {
          text-align: right;
          font-weight: bold;
          font-size: 1.5em;
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

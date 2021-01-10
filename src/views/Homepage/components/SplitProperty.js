import * as React from 'react'

export default function SplitProperty () {
  return (
    <div className='split-property'>
      <div className='header'>
        <h2>Split by Property</h2>
        <select value="source-ad-campaign">
          <option value="source-ad-campaign">Source Ad Campaign</option>
        </select>
      </div>

      <div className='property-stats'>
        <div className='property'>
          <div className='name'>BeBetter 2021</div>
          <div className='count'>20 people</div>
        </div>

        <div className='property'>
          <div className='name'>ThinkDifferently Instagram</div>
          <div className='count'>5 people</div>
        </div>

        <div className='property'>
          <div className='name'>Super Bowl TV Spot</div>
          <div className='count'>3 people</div>
        </div>

        <div className='property'>
          <div className='name'>Avalanche Conference</div>
          <div className='count'>1 person</div>
        </div>

        <div className='property'>
          <div className='name'>Twitter #StopTheClock</div>
          <div className='count'>1 person</div>
        </div>

        <div className='property'>
          <div className='name'>CodeItAll Conference (In Person)</div>
          <div className='count'>1 person</div>
        </div>

        <div className='property'>
          <div className='name'>Applebees Menu Item</div>
          <div className='count'>1 person</div>
        </div>

        <div className='property'>
          <div className='name'>Yelling at passersby</div>
          <div className='count'>1 person</div>
        </div>
      </div>

      <div className='footer'>
        <a href='#'>More Property Breakdowns</a>
      </div>

      <style jsx>{`
        .split-property {
          width: 100%;
          background-color: #f5f7ff;

          padding: 1em;
          box-sizing: border-box;
          border-radius: 3px;
        }

        .property-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .property-stats .property:nth-child(odd) {
          border-right: 1px solid #cecece;
        }

        .property {
          display: flex;
          justify-content: space-between;
          align-items: center;

          border-bottom: 1px solid #cecece;
          padding: 1em 1em;
        }

        .property.selected {
          background-color: #41c39f;
          color: white;
        }

        .property .name {
          font-size: 1.3rem;
        }

        .property .count {
          font-weight: bold;
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

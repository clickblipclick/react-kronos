import React, { Component } from 'react'
import Moment from 'moment'
import Kronos from  'kronos'

// Dunno why this is here?
// import Kronos from '../dist/kronos.min'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datetime: Moment().toISOString()
    }
  }

  onChange(datetime) {
    console.log('datetime:', datetime)
    this.setState({ datetime: datetime })
  }

  render() {

    let github =
      <svg viewBox='0 792 512 512'>
        <path d='M256,798.3c-141.4,0-256,114.6-256,256c0,113.1,73.3,209.1,175.1,242.9c12.8,2.3,17.5-5.6,17.5-12.3c0-6.1-0.2-26.3-0.4-47.7c-64.4,11.7-80.9-15.8-86.2-30.2c-2.8-7.4-15.2-30.1-26.2-36.1c-9-4.9-21.6-16.6-0.5-16.9c20.2-0.2,34.7,18.7,39.2,26.4c23,38.9,59.9,27.8,74.5,21.2c2.3-16.5,9-27.8,16.3-34.2c-56.8-6.5-116.6-28.4-116.6-126.5c0-28,10-50.8,26.3-68.7c-2.6-6.5-11.4-32.5,2.5-67.8c0,0,21.5-6.9,70.4,26.3c20.4-5.7,42.3-8.5,64.1-8.6c21.7,0.1,43.7,2.9,64.1,8.6c48.8-33.2,70.3-26.3,70.3-26.3c14,35.3,5.2,61.3,2.6,67.7c16.4,17.9,26.3,40.7,26.3,68.7c0,98.3-59.9,120-116.9,126.3c9.2,7.9,17.4,23.5,17.4,47.4c0,34.2-0.3,61.8-0.3,70.3c0,6.8,4.7,14.8,17.6,12.3c101.7-33.9,174.9-129.8,174.9-242.9C512,912.9,397.4,798.3,256,798.3z' />
      </svg>

    let npm =
      <svg viewBox='0 792 512 512'>
        <path d='M0,792v512h512V792H0z M416,1208h-64V952h-96v256H96V888h320V1208z'/>
      </svg>

    let style = {
      app: {
        display: 'flex',
        minHeight: '100%',
        backgroundColor: 'hsl(0, 0%, 94%)',
        fontFamily: 'Source Sans Pro',
      },
      page: {
        backgroundColor: 'white',
        margin: '160px auto 100px',
        minWidth: 800,
        boxShadow: '0 0 12px 2px hsla(0, 0%, 0%, 0.1)',
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 32,
      },
      tagline: {
        color: 'hsl(0, 0%, 66%)',
        fontStyle: 'italic',
      },
      main: {
        backgroundColor: 'hsl(0, 0%, 97%)',
        padding: '48px 0',
      },
      coming: {
        margin: 32,
        color: 'hsl(0, 0%, 66%)',
        fontStyle: 'italic',
      }
    }

    let props = {
      options: {
        color: '#67c446',
        corners: 4,
      },
      // shouldTriggerOnChangeForDateTimeOutsideRange: true,
      // closeOnBlur: false,
    }

    let minDate = Moment().subtract(2, 'weeks').toDate()
    let maxDate = Moment().add(2, 'weeks').toDate()

    return (
      <div style={style.app}>
        <div style={style.page}>
          <header style={style.header}>
            <div>
              <h1 style={{margin: 0}}>React Kronos 0.3.1</h1>
              <span style={style.tagline}>A fast, intuitive, and elegant date and time picker for React.</span>
            </div>
            <div style={style.icon}>
              <a className='icon-link' href='https://www.npmjs.com/package/react-kronos'>
                {npm}
              </a>
              <a className='icon-link' href='https://github.com/dubert/react-kronos'>
                {github}
              </a>
            </div>
          </header>
          <main style={style.main}>
            <div className='kronos'>
              <Kronos
                date={this.state.datetime}
                onChange={::this.onChange}
                min={minDate}
                max={maxDate}
                {...props}
              />
              <Kronos
                time={this.state.datetime}
                onChange={::this.onChange}
                min={minDate}
                max={maxDate}
                {...props}
              />
            </div>
          </main>
          <div style={style.coming}>
            Documentation coming soon. Read more on Github.
          </div>
        </div>
      </div>
    )
  }
}

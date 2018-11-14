import Layout from '../components/layout'
import Section from '../components/section'
import Intro from '../components/intro'
import ConferenceSchedule from '../components/conferenceSchedule'
import DaySelector from '../components/daySelector'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        selectedDay: ''
    }
  }

  static async getInitialProps({ req, query }) {
    const selectedDay = query.selectedDay
    return { 
        selectedDay: selectedDay || 'day2'
    }
  }  

  componentDidMount() { 
    this.setState({
        selectedDay: this.props.selectedDay
    })
  }

  onDayChanged(day) {
      this.setState({
          selectedDay: day
      })
  }

  render() {
    return (
        <Layout title="Program">
            <Section>
                <Intro
                    title="ColdFront 2018 Program"
                    text="The program for ColdFront 2018 with 2 full conference days of inspiring talks, 1 community day with workshops, social dinners and parties!"/>
            </Section>
            <Section bright>
                <DaySelector onDayChanged={this.onDayChanged.bind(this)} selectedDay={this.state.selectedDay} />
                <ConferenceSchedule selectedDay={this.state.selectedDay} />
            </Section>
        </Layout>        
    )
  }
}

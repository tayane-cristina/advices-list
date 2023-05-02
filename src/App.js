import React from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Header from './components/Header'
import PhraseAdvice from './components/PhraseAdvice'

class App extends React.Component {
  constructor () {
    super()
    this.fetchAGoodAdvice = this.fetchAGoodAdvice.bind(this)
    this.saveAdvice = this.saveAdvice.bind(this)
    this.newAdvice = this.newAdvice.bind(this)
    this.removeAdvice = this.removeAdvice.bind(this)

    this.state = {
      theAdvice: '',
      allAdvices: [],
      loading: false,
    }
  }

  fetchAGoodAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      this.setState({theAdvice: data.slip.advice})
      this.setState({loading: false})
    })
  }

  componentDidMount() {
    this.fetchAGoodAdvice()
  }

  saveAdvice() {
    this.setState(({theAdvice, allAdvices}) => ({
      allAdvices: [...allAdvices, theAdvice ]
    }))

    this.fetchAGoodAdvice()
  }

  newAdvice() {
     this.setState({loading: true})
    setTimeout(() => {
      this.fetchAGoodAdvice();
    } , 1000)
  }

  removeAdvice(index){
    const { allAdvices } = this.state
    allAdvices.splice(index, 1)
    this.setState({allAdvices})
  }

  render() {
    const {allAdvices, loading, theAdvice} = this.state
    return(
      <div className='cointainer'>
        <Header />
        <Buttons saveAdvice={this.saveAdvice} newAdvice={this.newAdvice}/>
        <PhraseAdvice allAdvices={allAdvices} loading={loading} theAdvice={theAdvice} removeAdvice={this.removeAdvice}/>
      </div>
    )
  }
}
export default App;

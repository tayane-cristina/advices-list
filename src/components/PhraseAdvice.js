import React from 'react'
import Loading from './loading'
import "../App.css"
import { BsTrash3Fill } from 'react-icons/bs'

class PhraseAdvice extends React.Component{
    render() {
        const { loading, allAdvices, theAdvice, removeAdvice } = this.props
        return(
          <main>
            <div className='phrase'>
              {loading ?  <Loading /> : <p className='phrase-advice'>"{theAdvice}"</p>}
            </div>
            
            <ul>
              {allAdvices.map((advice, index) => <li key={index}>{advice} <span onClick={() => removeAdvice(index)}><BsTrash3Fill /></span></li>)}
            </ul>
        </main>
        )
    }
}
export default PhraseAdvice
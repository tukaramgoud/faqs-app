// Write your code here.
import {Component} from 'react'
import './index.css'

import FaqsItem from '../FaqItem'

class Faqs extends Component {
  state = {faqsListDetails: []}

  componentDidMount = () => {
    const {faqsList} = this.props
    const updateList = faqsList.map(One => ({...One, isPlus: true}))
    this.setState({faqsListDetails: updateList})
  }

  changeStatusPlusToMinus = id => {
    const {faqsListDetails} = this.state
    const newUpdate = faqsListDetails.map(NewOne => {
      if (NewOne.id === id) {
        return {...NewOne, isPlus: false}
      }
      return NewOne
    })
    this.setState({faqsListDetails: newUpdate})
  }

  changeStatusMinusToPlus = id => {
    const {faqsListDetails} = this.state
    const newUpdate = faqsListDetails.map(NewOne => {
      if (NewOne.id === id) {
        return {...NewOne, isPlus: true}
      }
      return NewOne
    })
    this.setState({faqsListDetails: newUpdate})
  }

  render() {
    const {faqsListDetails} = this.state
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="unOrdered-list">
            {faqsListDetails.map(eachOne => (
              <FaqsItem
                itemDetails={eachOne}
                key={eachOne.id}
                itemClickedPlus={this.changeStatusPlusToMinus}
                itemClickedMinus={this.changeStatusMinusToPlus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

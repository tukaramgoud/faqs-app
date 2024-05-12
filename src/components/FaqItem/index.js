// Write your code here.
import './index.css'

const FaqsItem = props => {
  const {itemDetails, itemClickedPlus, itemClickedMinus} = props

  const buttonClickedPlus = () => {
    itemClickedPlus(itemDetails.id)
  }

  const buttonClickedMinus = () => {
    itemClickedMinus(itemDetails.id)
  }

  return (
    <li className="list-styling">
      <div className="question-container">
        <h1 className="item-heading">{itemDetails.questionText}</h1>
        {itemDetails.isPlus ? (
          <button
            type="button"
            className="button-styling"
            onClick={buttonClickedPlus}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          </button>
        ) : (
          <button
            type="button"
            className="button-styling"
            onClick={buttonClickedMinus}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          </button>
        )}
      </div>
      {itemDetails.isPlus ? null : (
        <div>
          <hr />
          <p className="item-para">{itemDetails.answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqsItem

//   <li className="list-styling">
//       <div className="question-container">
//         <h1 className="item-heading">{itemDetails.questionText}</h1>
//         <button
//           type="button"
//           className="button-styling"
//           onClick={buttonClicked}
//         >
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
//             alt="plus"
//           />
//         </button>
//       </div>
//       <div>
//         <hr />
//         <p className="item-para">{itemDetails.answerText}</p>
//       </div>
//     </li>

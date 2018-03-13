import React from 'react'
import Close from '../Images/close.svg'
import Icon from './Icon'
import _ from 'lodash'
import FullStar from '../Images/fullStar.svg'
import HalfStar from '../Images/halfStar.svg'
import PropTypes from 'prop-types'

const BookDetails = (props) => {
  const { bookDetails, showBookDetails } = props
  let rating = bookDetails.averageRating ? (bookDetails.averageRating + "").split('.') : false
  return (
    <div className="book-description animate-description">
      <div className="content">
        <button onClick={() => showBookDetails({})}>
          <Icon icon={Close} classes="add-book" />
          close
        </button>
        <div className="book-image">
          <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />
          {bookDetails.pageCount && <div className="page-count"><span>Pages : </span><span> {bookDetails.pageCount}</span></div>}

          {rating &&
            <div className="rating">
              <div>
                {_.range(0, rating[0]).map(() => (
                  <img src={FullStar} className="star" alt="star" />
                ))}
              </div>
              <div>
                {rating[1] > 0 && <img src={HalfStar} className="star" alt="star" />}
              </div>
            </div>}
        </div>
        <div className="detailed-description">
          <h1>{bookDetails.title}</h1>
          <div className="d_1">
            {bookDetails.authors && <div>Authors : {bookDetails.authors.join(', ')}</div>}
          </div>
          <p>
            {bookDetails.description}
          </p>
        </div>
      </div>

    </div>
  )
}
BookDetails.propTypes = {
  bookDetails : PropTypes.object.isRequired,
  showBookDetails: PropTypes.func.isRequired
}

export default BookDetails

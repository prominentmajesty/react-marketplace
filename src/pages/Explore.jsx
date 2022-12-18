import React from 'react';
import {Link} from 'react-router-dom';
import rentCategoryImage from '/assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '/assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='exxplore'>
      <header>
        <p className="pageHeader">Eplore..</p>
      </header>
      <main>
        {/* Slider */}
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to='/category/rent'>
            <img src={rentCategoryImage} alt='rent' className='exploreCategoryImage'></img>
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to='/category/sell'>
            <img src={sellCategoryImage} alt='sell' className='exploreCategoryImage'></img>
            <p className="exploreCategoryName">Places for sell</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
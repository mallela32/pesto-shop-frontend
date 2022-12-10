import React from 'react'

const Carousel = () => {
  return (
    <div className='container'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={0}
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={1}
            aria-label='Slide 2'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={2}
            aria-label='Slide 3'
          />
        </div>
        <div className='carousel-inner'>
          <div
            className='carousel-item active'
            style={{
              backgroundImage:
                'url("https://static.vecteezy.com/system/resources/previews/000/251/809/original/vector-diwali-festival-offer-big-sale-background-template-design.jpg")',
            }}
          >
            
            <div className='carousel-caption'>
              <h5>Diwali Sale</h5>
              <p>
                50% Discount
              </p>
            </div>
          </div>
          <div
            className='carousel-item'
            style={{
              backgroundImage:
                'url("https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/blog-2_1.jpg?v=1665561814&width=1900")',
            }}
          >
            <div className='carousel-caption'>
              <h5>Boat Electronics</h5>
              <p>
                Have Extra Bass
              </p>
            </div>
          </div>
          <div
            className='carousel-item'
            style={{
              backgroundImage:
                'url("https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg")',
            }}
          >
            <div className='carousel-caption'>
              <h5>Offer on Electronics</h5>
              <p>
                Best Offer on Electronics
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel

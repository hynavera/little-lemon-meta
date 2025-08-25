import React from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";


const Faq = () => {
  return (
    <div className="faq-layout">
      <div className="faq-qt row">
        <p className='ques'>What are your hours of operation?</p>
        <p className='ans'>
          <i>What are your hours of operation?</i> <br />
We're open Tuesday through Sunday to serve you better. While we're closed on Mondays for team training and menu development, our online reservation system is always available. During major holidays, we may adjust our hours, which we'll announce on our website and social media channels.        </p>
        <HiOutlineChevronDown className='arr'/>
      </div>
      <div className="faq-qt row">
        <p className='ques'>Do you take reservations, and how can I make one?</p>
        <p className='ans'>
          <i>Do you take reservations, and how can I make one?</i> <br />
Yes, we welcome reservations and recommend them, especially for dinner service and weekends. You can easily book through our website, our mobile app, or popular platforms like OpenTable. For same-day reservations or groups larger than 8, please call us directly. We hold reservations for 15 minutes past the booking time. For special occasions or specific seating requests, add a note to your reservation or call us - we'll do our best to accommodate your preferences.        </p>
        <HiOutlineChevronDown className='arr'/>
      </div>
      <div className="faq-qt row">
        <p className='ques'>Do you offer takeout and delivery services?</p>
        <p className='ans'>
          <i>Do you offer takeout and delivery services?</i> <br />
Yes, we offer both takeout and delivery options designed to bring our restaurant experience to your home. You can place takeout orders through our website, mobile app, or by phone. We partner with several delivery services, but we recommend ordering directly through us for the best prices and most accurate delivery times. Our takeout menu includes most of our regular dishes, specially packaged to maintain quality. For large orders or catering, please give us at least 24 hours' notice.        </p>
        <HiOutlineChevronDown className='arr'/>
      </div>
      <div className="faq-qt row">
        <p className='ques'>What payment methods do you accept?</p>
        <p className='ans'>
          <i>What payment methods do you accept?</i> <br />
We accept all major credit cards (Visa, Mastercard, American Express, Discover), mobile payments (Apple Pay, Google Pay), and cash. For private events or catering, we can also process business checks and direct bank transfers. We offer digital receipts, and our point-of-sale system makes it easy to split bills among multiple cards. For groups of 6 or more, we may add an automatic gratuity of 18%, which will be clearly noted on your bill.        </p>
        <HiOutlineChevronDown className='arr'/>
      </div>
      <div className="faq-qt row">
        <p className='ques'>What's your cancellation policy?</p>
        <p className='ans'>
          <i>What's your cancellation policy?</i> <br />
We understand plans can change, and we appreciate as much notice as possible for cancellations. For regular reservations, please notify us at least 2 hours in advance. For groups of 8 or more, we request 24 hours' notice. Private events have specific cancellation terms outlined in the event contract. No-shows or late cancellations may affect future reservation privileges. During peak times or special events, we may require a credit card to hold reservations, with a cancellation fee for late notices.        </p>
        <HiOutlineChevronDown className='arr'/>
      </div>
    </div>
  )
}

export default Faq
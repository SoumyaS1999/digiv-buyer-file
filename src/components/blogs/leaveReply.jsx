import SlideUp from '@/utils/animations/slideUp'
import React from 'react'

const LeaveReply = () => {
    return (
        <SlideUp className="leave__replay">
            <h2 className="t__54">Leave A Reply</h2>
            <p>
                Your email address will not be published. Required fields are
                marked *
            </p>
            <form action>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="col-12">
                        <textarea name id placeholder="Your Message" defaultValue={""} />
                    </div>
                    <div className="d-flex align-items-baseline gap-1 w-100">
                        <input type="checkbox" name id="cehck" className="w-auto" />
                        <label htmlFor="cehck">Save my name, email, and website in this browser for the
                            next time I comment.</label>
                    </div>
                    <div>
                        <button className="common__btn mt-4 mt-md-0">
                            Post A Comment
                            <img src="/icons/arrow-up-rignt-black.svg" alt />
                        </button>
                    </div>
                </div>
            </form>
        </SlideUp>

    )
}

export default LeaveReply
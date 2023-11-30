import React from "react";

const Booking = () => {
  return (
    <div className="booking" id="booking">
      <div className="container-fluid">
        <div className="row">
                    <div className="col-12 pt-5">
                        <h1 className="appointment text-center">Book Appointment</h1>
                    </div>
          <div className="col-md-12 p-25 form">
            <form action="https://formspree.io/f/mbjvlley" method="POST">
                    <div className="form-group col-12">
                        <input type="text" name="name" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="form-group col-12">
                        <input type="email" name="email" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="form-group col-12">
                        <input type="date" name="date" className="form-control" placeholder="DD/MM/YYYY" />
                    </div>
                    <div className="form-group col-12">
                        <input type="time" name="time" className="form-control" placeholder="Time" />
                    </div>
                    <div className="form-group col-12">
                        <textarea name="message" className="form-control" id="#" cols="30" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group col-12">
                        <button type="submit" className="btn-3">Submit</button>
                    </div>
                </form>
        </div>
      </div>
    </div>
</div>
  );
};

export default Booking;

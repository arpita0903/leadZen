import React, { useState } from "react";

const CardDetails = ({ apiData }) => {

    const[display,setDisplay] = useState(false)

    const handleDisplay = () =>{
        setDisplay(!display)
    }

    const handleHide = () =>{
        setDisplay(false)
    }

  return (
    <>
      {apiData?.map((item) => {
        return (
          <>
            <div
              className="card p-3 mx-auto my-5 rounded-4"
              key={item.id}
              style={{ width: "90%" }}
            >
              <div className="d-flex justify-content-between align-items-center card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="text-center">
                  <h3>UserName</h3>
                  <p>{item.username}</p>
                </div>
                <div className="text-center">
                  <h3>Email</h3>
                  <p>{item.email}</p>
                </div>
                <div className="text-center">
                  <h3>Website</h3>
                  <p>{item.website}</p>
                </div>
                <button onClick={handleDisplay} className="btn btn-danger rounded-pill">
                  View Details
                </button>
              </div>
              {/* Complete Card Details are displayed below */}
              {display ? <div
                className="card p-3 mx-auto my-5 rounded-4"
                style={{ width: "90%" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Description</h5>
                  <p>{item.company?.catchPhrase}</p>
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">Contact Person</h5>
                      <p>{item.name}</p>
                      <h5 className="card-title">Company Name</h5>
                      <p>{item.company.name}</p>
                      <h5 className="card-title">Emails</h5>
                      <p>{item.email}</p>
                      <h5 className="card-title">Phone</h5>
                      <p>{item.phone}</p>
                    </div>
                    <div className="col">
                      <h5 className="card-title">City</h5>
                      <p>{item.address.city}</p>
                      <h5 className="card-title">Street</h5>
                      <p>{item.address.street}</p>
                      <h5 className="card-title">Suite</h5>
                      <p>{item.address.suite}</p>
                      <h5 className="card-title">Zip Code</h5>
                      <p>{item.address.zipcode}</p>
                    </div>
                    <div>
                      <button onClick={handleHide} className="btn btn-danger rounded-pill">
                        Hide Details
                      </button>
                    </div>
                  </div>
                </div>
              </div> :""}
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardDetails;

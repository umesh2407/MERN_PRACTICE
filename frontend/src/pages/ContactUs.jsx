import React from "react";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <div className="text-center m-10 p-10">
        {this.state.count}
        {" "}    
            Contact US
            
        </div>;
      </>
    );
  }
}

export default ContactUs;

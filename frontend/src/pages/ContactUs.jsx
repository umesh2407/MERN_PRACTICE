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
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
            className="bg-slate-500 border rounded-lg p-2 mr-4"
          >
            Increase Count
          </button>
          Contact US {this.state.count}
        </div>
        ;
      </>
    );
  }
}

export default ContactUs;

import React, { Component } from 'react';
import ApplyCard from './ApplyCard';
import applyService from '../../services/applyService';
import imageprofile from '../../img/helen_profile.jpeg';

class MyApplies extends Component {
  state = {
    applies: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const applies = await applyService.getMyApplies(this.state);

      this.setState({
        applies,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { applies, loading } = this.state;
    return (
      <div className="contenido contenido-principal">
        <div className="row">
          <div className="three columns">
            <img className="img-profile" src={imageprofile} alt="iron-beer-logo" />
          </div>
          <div className="six columns">
            <h3>Sophia Helena</h3>
          </div>
          <div className="three columns">
            <p className="title">FullStack developer student</p>
          </div>
        </div>

        <div className="row">
          {!loading &&
            applies.map((apply, index) => {
              return (
                <div key={`${apply._id}-${index}`}>
                  <ApplyCard apply={apply} />
                </div>
              );
            })}

          {loading && <div>loading...</div>}
        </div>
      </div>
    );
  }
}

export default MyApplies;

import React, { Component } from 'react';
import ApplyCard from './ApplyCard';
import applyService from '../../services/applyService';
import imageprofile from '../../img/helen_profile.jpeg';

class MyApplies extends Component {
  state = {
    applies: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const applies = await applyService.getMyApplies(this.state);

      this.setState({
        applies,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { applies, loading } = this.state;
    return (
      <div className='wrapper'>

        <div style={{ width: 1200 }} className="my-profile-card">
          <img src={imageprofile} alt='iron-beer-logo' />
          <h3>Sophia Helena</h3>
          <p className="title">FullStack developer student</p>
          <h2>My applies</h2>

          {!loading && applies.map((apply, index) => {

            return (
              <div key={`${apply._id}-${index}`}>
                <ApplyCard
                  apply={apply}
                />
              </div>
            )
          })}

          {loading && <div>loading...</div>}

        </div>


      </div>
    )
  }
}

export default MyApplies;
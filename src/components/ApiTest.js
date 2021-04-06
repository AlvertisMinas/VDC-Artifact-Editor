import React, { Component } from 'react'

class ApiTest extends Component {
  	constructor (props) {
    	super(props)
    	this.state = {
     		items: [],
      		isLoaded: false
    	}
  	}

  	componentDidMount () {
  		fetch('https://jsonplaceholder.typicode.com/users')
  			.then(res => res.json())
  			.then(json => {
  				this.setState({
  					items: json,
  					isLoaded: true
  				})
  			})
  	}

  	render () {
  		const { isLoaded, items } = this.state

  		if (!isLoaded) {
  			return <div>Loading...</div>
  		} else {
    		return (
      			<div className='ApiTest'>
        			<table align='center'>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            {items.map(item => (
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
        				))}
          </tbody>
        			</table>
      			</div>
      		)
    	}
  }
}

export default ApiTest

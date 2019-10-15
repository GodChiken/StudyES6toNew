import React, {Component} from 'react'

class CollectionExample extends Component{

    constructor(props){
        super(props);
    }

    render() {
        const numbers = [1,2,3,4,5,6,7];
        const listDom = numbers.map((number) =>
            <div>{number * 2}</div>
        );
        return listDom;
    }
}

export default CollectionExample;
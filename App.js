class IsPurchased extends React.Component {
    render() {
        return (
            <div className="showingPurchased">

                <h1>Item : {this.props.groceryItem.item}</h1>
                <p> Brand : {this.props.groceryItem.brand}</p>
                <p> Units : {this.props.groceryItem.units}</p>
                <p> Price : ${this.props.groceryItem.quantity}</p>
                <p> Added to Cart : No Yet</p>

            </div>
        )
    }
}

class App extends React.Component {
    state = {
        groceryItems: items,
        item: '',
        brand: '',
        units:'',
        price:0,
        isPurchased:false,
        listOfItems : []
    }

    addToList = item =>{
        this.setState({
            listOfItems :[item, ...this.state.listOfItems]
        })
    }
    handleChange(e){
        this.setState ({[e.target.id] : e.target.value})
    }

    handleSubmit = e=> {
        e.preventDefult()
        const newItem ={
            item : this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            price: parsefloat(this.state.price),
            isPurchase : false
        }
        this.setState({
            groceryItems : [newItem, ...this.state.items],
            item : '',
            brand: '',
            units: '',
            price: 0,
            isPurchase : false
        })
    }

    

    render() {
        return (
            <div>
                <h1> REACT GROCERY </h1>
                {
                    <div className="groceryContainer">
                        {
                            this.state.groceryItems.map(groceryItem => {
                                return (
                                    <div>
                                        {
                                            groceryItem.isPurchased
                                                ?
                                                null
                                                :
                                                <IsPurchased groceryItem={groceryItem} />
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                }
                <div className="form-Container">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='item'> Item:</label>
                        <input type='text' value = {this.state.item} id='item'/>
                        <label htmlFor='brand'> Brand:</label>
                        <input type='text' value = {this.state.brand} id='brand'/>
                        <label htmlFor='units'> Units:</label>
                        <input type='text' value = {this.state.units} id='units'/>
                        <label htmlFor='price'> Price:</label>
                        <input type='text' value = {this.state.price} id='price'/>
                        <input type='submit' value='Add New Item' />
                        
                    </form>
                </div>
            </div>
       
        )
    }
}                 

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)

class IsPurchased extends React.Component {

    render() {
        return (
            <div className="showingPurchased">

                <h1>Item : {this.props.groceryItem.item}</h1>
                <p> Brand : {this.props.groceryItem.brand}</p>
                <p> Units : {this.props.groceryItem.units}</p>
                <p> Quantity : ${this.props.groceryItem.quantity}</p>
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
        quantity:'',
        isPurchased:false,
        listOfItems : []
    }

    addToList = item =>{
        this.setState({
            listOfItems :[item, ...this.state.listOfItems]
        })
    }
    handleChange = (e) =>{
        this.setState({ [e.target.id]: e.target.value})
        // console.log(e.target.value)
    }

    handleSubmit = e=> {
        e.preventDefault()
        const newItem ={
            item : this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchase : false
        }
        console.log(newItem)
        this.setState({
            groceryItems : [newItem, ...this.state.groceryItems],
            item : '',
            brand: '',
            units: '',
            quantity: '',
            isPurchase : false
        })
    }

    

    render() {
        console.log(items)
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
                    <form  onSubmit={this.handleSubmit}>
                        <label htmlFor='item'> Item:</label>
                        <input type='text' id='item' onChange = {this.handleChange} value = {this.state.item}/>
                        <label htmlFor='brand'> Brand:</label>
                        <input type='text' id='brand' onChange ={this.handleChange} value = {this.state.brand}/>
                        <label htmlFor='units'> Units:</label>
                        <input type='text' id='units' onChange = {this.handleChange} value = {this.state.units} />
                        <label htmlFor='price'> Quantity:</label>
                        <input type='text' id='quantity' onChange = {this.handleChange} value = {this.state.quantity} />
                        <input type='submit'/>  
                        {/* value='Add New Item' */}
                        
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
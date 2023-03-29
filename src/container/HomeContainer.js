import { connect } from 'react-redux';
import { addToCart, removeFromCart } from "../service/actions/action"
import Home from '../components/Home'

const mapStateToProps = state => ({
    cardData: state.cardItem
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;
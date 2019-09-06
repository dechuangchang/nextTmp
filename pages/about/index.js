
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link'
import {getCurrency} from '../../js/actions/common';
import './index.less'
const mapStateToProps = (state, ownProps) => {
  return {
    
    currencyList: state.currencyList
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({getCurrency},dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    }
    
    componentWillMount() {
     
      
    }
    componentDidMount(){
      let {currencyList,getCurrency} = this.props
      getCurrency()
     
    }
    render() {
      let {currencyList,getCurrency} = this.props
      return  (
        <div className='about' style={{ marginTop: 100 }}>
          <ul>
            {
              currencyList.map(item=><li key={item}>{item}about</li>)
            }
          </ul>

          <Link href="/home"><a>Home</a></Link>
        </div>
      )
    }
}
export default App;

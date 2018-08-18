import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map(book => {
      return (
        <li
          key={book.id}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      )
    });
  }
  render(){
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  // the return will show as props inside BookList
  return {
    books: state.books
  };
}

//anything returned will end up as props  on BookList
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result should
  // be passed to all reducers
  return bindActionCreators({selectBook : selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)

import { connect } from 'react-redux';
import Navigation from './../components/Navigation';

const menuName = "Navigation";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    isOpen: (state.menus.isOpen && state.menus.current === menuName),
    menuName: menuName
  }
}

const ConnectedNavigationContainer = connect(
  mapStateToProps
)(Navigation)

export default ConnectedNavigationContainer;

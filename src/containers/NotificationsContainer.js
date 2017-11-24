import { connect } from 'react-redux';
import Notifications from './../components/Notifications';

const menuName = "Notifications";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    notifications: state.notifications.data,
    isToggled: state.notifications.toggled,
    isOpen: (state.menus.isOpen && state.menus.current === menuName),
    menuName: menuName
  }
}

const ConnectedNotificationsContainer = connect(
  mapStateToProps
)(Notifications)

export default ConnectedNotificationsContainer;

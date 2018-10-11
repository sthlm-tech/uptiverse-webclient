export const SET_MENU_OPEN = 'SET_MENU_OPEN';
export const SET_MENU_CLOSE = 'SET_MENU_CLOSE';
export const SET_MENU_CONTENT = 'SET_MENU_CONTENT';

export const setMenuContent = (content) => {
  return {
    type: SET_MENU_CONTENT,
    content: content
  }
}

export const openMenu = menu => dispatch => {
  dispatch(closeMenus());
  return dispatch({
    type: SET_MENU_OPEN,
    menu: menu
  });
}

export const closeMenus = () => {
  return {
    type: SET_MENU_CLOSE
  }
}

export const toggleMenu =(menu) => (dispatch, getState) => {
  var menus = getState().menus;
    if(menus.isOpen && menus.current === menu){
      dispatch(closeMenus());
    }
    else{
      dispatch(openMenu(menu));
    }
    //this.setState({showMenu: !this.state.showMenu});
  }

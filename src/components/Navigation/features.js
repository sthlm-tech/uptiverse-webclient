let features = [
  {
    link: "/pages",
    implemented: false,
    shouldShow: true,
    icon: 'cubes',
    name: 'Pages',
    submenu: [
      {
        link: "/pages/welcome",
        implemented: false,
        shouldShow: true,
        icon: 'heart-o',
        name: 'Welcome to Uptive'
      },
      {
        link: "/pages/important",
        implemented: true,
        shouldShow: true,
        icon: 'exclamation-circle',
        name: 'Important information'
      }
    ]
  },
  {
    link: "/news",
    implemented: true,
    shouldShow: true,
    icon: 'newspaper-o',
    name: 'News'
  },
  {
    link: "/employees",
    implemented: true,
    shouldShow: true,
    icon: 'users',
    name: 'Employees'
  },
  {
    link: "/time",
    implemented: false,
    shouldShow: false,
    icon: 'clock-o',
    name: 'Time report'
  },
  {
    link: "/recruits",
    implemented: true,
    shouldShow: true,
    icon: 'user-plus',
    name: 'Recruits'
  }];

  export {features};

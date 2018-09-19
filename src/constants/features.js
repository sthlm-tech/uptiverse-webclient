let features = [
  {
    link: "/pages",
    implemented: true,
    shouldShow: true,
    icon: 'cubes',
    name: 'Pages',
    submenu: [
      {
        link: "/pages/welcome",
        implemented: true,
        shouldShow: false,
        icon: 'heart-o',
        name: 'Welcome to Uptive'
      },
      {
        link: "/pages/uptiverse",
        implemented: true,
        shouldShow: false,
        icon: 'question-circle',
        name: 'About Uptiverse'
      },
      {
        link: "/pages/important",
        implemented: false,
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
    link: "/economy",
    implemented: false,
    shouldShow: false,
    icon: 'line-chart',
    name: 'Economy'
  },
  {
    link: "/recruits",
    implemented: true,
    shouldShow: true,
    icon: 'user-plus',
    name: 'Recruits'
  }];

  export {features};

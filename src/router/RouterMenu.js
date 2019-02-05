import Dashboard from '../views/Dashboard'
import AboutUs from '../views/aboutUs'
import ContentMuseum from '../views/contentMuseum'
import highlight from '../views/highlight'
import UserAdmin from '../views/userAdmin'

const RouterMenu = [
  {
    path: '/Management',
    sidebarName: 'Management',
    navbarName: ' จัดการข้อมูล',
    icon: 'reconciliation',
    component: Dashboard,
    subMenu: [
      {
        path: '/Beacon',
        sidebarName: 'Beacon',
        navbarName: ' จัดการรูปภาพไลท์',
        component: Dashboard,
      },
      {
        path: '/Highlight',
        sidebarName: 'Highlight',
        navbarName: 'จัดการรายการโปรโมท',
        component: highlight,
      },
      {
        path: '/AboutUs',
        sidebarName: 'About US',
        navbarName: ' จัดการสต๊อกสินค้า',
        component: AboutUs,
      },
      {
        path: '/ContentMuseum',
        sidebarName: 'ContentMuseum',
        navbarName: ' รายการสิ่งของ',
        component: ContentMuseum,
      }
    ]
  },
  {
    path: '/ManagementAdmin',
    sidebarName: 'User Admin',
    navbarName: ' จัดการข้อมูล',
    icon: 'user',
    component: UserAdmin,
  }
];
export default RouterMenu;

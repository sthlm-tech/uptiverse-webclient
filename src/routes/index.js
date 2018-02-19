import { getAuthenticatedUser } from './../actions/user';
import login from './login';
import news from './news';
import employees from './employees';
import recruits from './recruits';
import pages from './pages';
import { setMenuContent } from './../actions/menu';
import { features } from './../constants/features';
export default [
  {
    path: '/',
    async action(context) {
      return redirectIfLoggedIn(context, '/login', news);
    },
    children: [
      login
    ],
  },
  {
    path: '/',
    async action(context) {
      return requireLogin(context, login, function(context){
        context.store.dispatch(setMenuContent(features));
      });

    },
    children: [
      redirect("/", news),
      pages,
      news,
      employees,
      recruits,
      require('./notfound').default
    ],
  }
];

function redirect(pathFrom, component){
  return { path: pathFrom, action: (context) => redirectToPath(context, pathFrom, component) };
}

async function redirectToPath(context, pathFrom, component){
  const navigatedToPath = function(){ return context.url === pathFrom };
  return redirectIfTrue(context, navigatedToPath, component);
}

async function redirectIfLoggedIn(context, pathFrom, component){
  const navigatedToPath = function(){ return context.url === pathFrom && context.store.getState().user.isAuthenticated  };
  await context.store.dispatch(getAuthenticatedUser());
  return redirectIfTrue(context, navigatedToPath, component);
}

async function requireLogin(context, component, callback){
  const isNotAuthenticated = function(){ return !context.store.getState().user.isAuthenticated };
  await context.store.dispatch(getAuthenticatedUser());
  if(callback && typeof(callback) === 'function'){ callback(context); }
  return redirectIfTrue(context, isNotAuthenticated, component);
}

async function redirectIfTrue(context, statement, component){
  let child = await context.next();
  if(statement()){
    context.history.push(component.path);
    if(typeof component.action === "function" ){
      child = await component.action(context);
    }
    else{
      let baseChildComponent = component.children.find(function (route) { return route.path === context.url; });
      child = await baseChildComponent.action(context);
    }
  }
  return child;
}

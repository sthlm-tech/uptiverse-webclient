import { getAuthenticatedUser } from './../actions/user';
import login from './login';
import news from './news';

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
      return requireLogin(context, login);
    },
    children: [
      redirect("/", news),
      news,
      require('./notfound').default
    ],
  }
];

function redirect(pathFrom, component){
  console.log(component);
  return { path: pathFrom, action: (context) => redirectToPath(context, pathFrom, component) };
}

async function redirectToPath(context, pathFrom, component){
  const navigatedToPath = function(){ return context.url === pathFrom };
  return redirectWithStatement(context, navigatedToPath, component);
}

async function redirectIfLoggedIn(context, pathFrom, component){
  const navigatedToPath = function(){ return context.url === pathFrom && context.store.getState().user.isAuthenticated  };
  await context.store.dispatch(getAuthenticatedUser());
  return redirectWithStatement(context, navigatedToPath, component);
}

async function requireLogin(context, component){
  const isNotAuthenticated = function(){ return !context.store.getState().user.isAuthenticated };
  await context.store.dispatch(getAuthenticatedUser());
  return redirectWithStatement(context, isNotAuthenticated, component);
}

async function redirectWithStatement(context, statement, component){
  let child = await context.next();
  if(statement()){
    context.history.push(component.path);
    child = await component.action(context);
  }
  return child;
}
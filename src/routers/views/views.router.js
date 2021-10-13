import { authMiddleware, loginMiddleware } from '../../middlewares/auth.middlewares.js'

import { productsView, loginView, logoutView } from '../../controllers/views.controllers.js';

import { Router } from 'express';

const viewsRouter = Router();

viewsRouter
  .get('/login', loginView)
  .post('/login', loginMiddleware)
  .get('/logout', logoutView)
  .get('/products', authMiddleware, productsView) 
;

export default viewsRouter



























/* viewsRouter.get('/', (req, res) => {
  res.redirect('/login')
}); */



/* viewsRouter.get('/login', (req, res) => {

  if (req.session.nombre) {

    res.redirect('/products')
    
  } else {

    res.sendFile('login.html', { root: './public' }) 
  }
}); */




/* 
viewsRouter.post('/login', (req, res) => {

  console.log(req.body)

  req.session.nombre = req.body.nombre;

  res.redirect('/products')
}); */





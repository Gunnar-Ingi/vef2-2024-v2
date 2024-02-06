import express from 'express';

export const indexRouter = express.Router();

async function indexRoute(req, res) {
  return res.render('index', {
    title: 'Forsíða',
    time: new Date().toISOString(),
  });
}

async function leikirRoute(req, res) {
  return res.render('leikir', {
    title: 'Leikir',
    time: new Date().toISOString(),
  });
}

async function stadaRoute(req, res) {
  return res.render('stada', {
    title: 'Staðan',
    time: new Date().toISOString(),
  });
}

async function thingRoute(req, res) {
  return res.render('thing', {
    title: 'Auka hlutur',
    time: new Date().toISOString(),
  });
}

indexRouter.get('/', indexRoute);
indexRouter.get('/leikir', leikirRoute);
indexRouter.get('/stada', stadaRoute);
indexRouter.get('/thing', thingRoute);

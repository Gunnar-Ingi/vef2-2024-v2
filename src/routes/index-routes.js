import express from 'express';
import { getGames } from '../lib/db.js';

export const indexRouter = express.Router();

async function indexRoute(req, res) {
  return res.render('index', {
    title: 'Forsíða',
    time: new Date().toISOString(),
  });
}

async function leikirRoute(req, res) {
  const games = await getGames();

  return res.render('leikir', {
    title: 'Leikir',
    games,
    time: new Date().toISOString(),
  });
}

async function stadaRoute(req, res) {
  return res.render('stada', {
    title: 'Staðan',
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

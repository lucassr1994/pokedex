import React from 'react';
import { Switch } from 'react-router-dom';
import PokeDex from '../views/PokeDex/PokeDex';
import Home from '../views/Home/Home';
import FirstPokemon from '../views/FirstPokemon/FirstPokemon'
import NotFound from '../views/NotFound/NotFound';
import Route from './routes';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/choose-first-pokemon" component={FirstPokemon} />
    <Route exact path="/pokedex" component={PokeDex} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;

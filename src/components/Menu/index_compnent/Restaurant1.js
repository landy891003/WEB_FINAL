import React from 'react';
import Grid from '@material-ui/core/Grid';
import LessSalt from './restaurant/LessSalt';
import DrSalt from './restaurant/DrSalt';
import MissEnergy from './restaurant/MissEnergy';
import Njuturn from './restaurant/NjuTurn';
import GetBlessing from './restaurant/GetBlessing';
import GetPower from './restaurant/GetPower';
import JonnyBro from './restaurant/JonnyBro';
import OneDayHappy from './restaurant/OneDayHappy';
import LifeKitchen from './restaurant/LifeKtichen';

const cards = [1];

export default function FuckUCJ() {
  return (
    <Grid container spacing={4}>
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <LessSalt/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <DrSalt/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <MissEnergy/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <Njuturn/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <GetBlessing/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <GetPower/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <OneDayHappy/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <JonnyBro/>
        </Grid>
    ))}
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <LifeKitchen/>
        </Grid>
    ))}
    </Grid>
  );
}
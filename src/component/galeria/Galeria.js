import React, { useState } from 'react';
import {GridList, GridListTile, GridListTileBar, ListSubheader, IconButton} from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Footer from '../footer/Footer';
import GaleriaDialog from './GaleriaDialog'
import ProjectData from './ProjectData'




import './Galeria.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black',
    color: 'white'
  },
  gridList: {
    width:'80%'
  }
}));


const myVar = process.env.REACT_APP_DB_URL;

function Galeria() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false)
  const [Project, setProject] = useState(1);

  
  const handleClickOpen = (project) => {
    setOpenDialog(true)
    setProject(project)
   // console.log('clickBtn', id)
  }

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      fontSize: '15px',
      backgroundColor: theme.palette.common.black,
    },
  }));

  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
    return <Tooltip arrow classes={classes} {...props} />;
  }

  
  return (
    <div className={classes.root}>
     
      <GridList cellHeight={220} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto',  }}>
          <ListSubheader component="div" style={{color: 'white', fontSize: '2em', fontFamily:"'Fredoka One', cursive" }}>GALERIA
          <h1 style={{color:'green'}}>{myVar}</h1>
          </ListSubheader>
        </GridListTile>
        {ProjectData.map((project) => (
          <GridListTile key={project.img} cols={project.cols || 1} onClick={(e)=>handleClickOpen(project)}>
            <img className={'imageGalerey'} src={project.img} alt={project.title}/>
            <GridListTileBar
              title={project.title}
              subtitle={<span>{project.investor}</span>}
              actionIcon={

                <BootstrapTooltip title={project.hint}>  
                <IconButton aria-label={`info about ${project.title}`} style={{color: `${project.color}`}}
                   onClick={(e)=>handleClickOpen(project)}>
                  <ApartmentIcon />
                </IconButton>
                </BootstrapTooltip>
              }
            />
          </GridListTile >
           ))}
      </GridList>   
      <Footer /> 
      <GaleriaDialog  openDialog={openDialog} setOpenDialog={setOpenDialog} Project={Project}/>
      </div>
  )
}

export default Galeria;
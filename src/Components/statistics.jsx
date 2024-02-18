import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { context } from "../contextAPI";


const StatisticsComponent = () => {

    const {data,monthRef} = useContext(context)

    const statisticData = data.statisticData

  return (
    <div className="statistics" ref={monthRef}>
        <Card sx={{ width:"calc(200px + 10vw)",display:"flex",justifyContent:"center" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Statistics 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography component="div"> Total sale :{statisticData.totalSaleAmount}</Typography>
          <Typography component="div">Total sold item :{statisticData.soldItem}</Typography>
          <Typography component="div">Total not sold item :{statisticData.notSoldItem}</Typography>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default StatisticsComponent;

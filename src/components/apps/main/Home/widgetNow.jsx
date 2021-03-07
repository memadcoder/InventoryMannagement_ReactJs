import React, { useEffect, useRef, useState } from 'react';
import { Typography, Paper } from '@material-ui/core';
import moment from 'moment';

function WidgetNow() {
  const [time, setTime] = useState(moment());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(update, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  function update() {
    setTime(moment());
  }

  return (
    <Paper className="w-full rounded-8 shadow-none border-1">
      <div className="flex items-center justify-between pr-4 pl-16 pt-4">
        <Typography className="text-14">
          {time.format('dddd, HH:mm:ss')}
        </Typography>
      </div>
      <div className="text-center px-24 py-16">
        <Typography className="text-h-16 leading-tight" color="textSecondary">
          {time.format('MMMM')}
        </Typography>
        <Typography className="text-48 leading-tight" color="textSecondary">
          {time.format('D')}
        </Typography>
        <Typography className="text-16 leading-tight" color="textSecondary">
          {time.format('Y')}
        </Typography>
      </div>
    </Paper>
  );
}

export default React.memo(WidgetNow);

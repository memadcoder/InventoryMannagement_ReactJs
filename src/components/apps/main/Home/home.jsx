import React from 'react';
import WidgetNow from './widgetNow';
import { Grid } from '@material-ui/core';
import { pendingOrder, completedOrder, rejectedOrder } from './analytics';

function Widget1({ icon, heading, count }) {
  return (
    <Grid item xs={6} md={3}>
      <div className="shadow-md rounded-lg flex flex-col justify-center items-center py-32">
        <img
          width={48}
          height={48}
          alt="widget"
          src={`data:image/svg+xml;base64,${icon}`}
        />

        <p
          className="font-semibold my-12"
          style={{
            color: '#8f8f8f'
          }}
        >
          {heading}
        </p>
        <p
          style={{
            color: '#922c88',
            marginBottom: 0
          }}
        >
          {count}
        </p>
      </div>
    </Grid>
  );
}
export default function AnalyticsHome() {
  return (
    <Grid container direction="column" className="p-8 sm:p-64">
      <Grid item container direction="row" spacing={4}>
        <Widget1 heading="Pending Order" count={12} icon={pendingOrder} />
        <Widget1 heading="Completed Order" count={12} icon={completedOrder} />
        <Widget1 heading="Rejected Order" count={12} icon={rejectedOrder} />

        <Grid item xs={6} md={3}>
          <WidgetNow />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} container>
        Recent Order here
      </Grid>
    </Grid>
  );
}

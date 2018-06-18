import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import theme from 'fusioncharts/themes/fusioncharts.theme.ocean';
theme(fusioncharts);
charts(fusioncharts);

const Chart = props => {
  var myDataSource = {
    chart: {
      caption: 'Sentiment Analysis of Selected News Articles',
      subcaption: props.source,
      xaxisname: 'Article',
      yaxisname: 'Sentiment and Emotion (% of max)',
      theme: 'ocean'
    },
    categories: [
      {
        category: []
      }
    ],
    dataset: [
      {
        seriesname: 'Sentiment',
        data: []
      },
      {
        seriesname: 'Emotion',
        renderas: 'line',
        showvalues: '0',
        data: []
      }
    ]
  };

  var chartData = {
    id: 'multi_chart' + Math.random(),
    type: 'mscombi2d',
    width: '100%',
    height: 600,
    dataFormat: 'json',
    dataSource: myDataSource
  };

  props.info.forEach(ele => {
    myDataSource.categories[0].category.push({ label: ele.title });
    myDataSource.dataset[0].data.push({ value: ele.emotion.toString() });
    myDataSource.dataset[1].data.push({ value: ele.magnitude.toString() });
  });

  return (
    <div id="row">
      <div className="col m12 chartContainer">
        <ReactFC {...chartData} />
      </div>
    </div>
  );
};

export default Chart;

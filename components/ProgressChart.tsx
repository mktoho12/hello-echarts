import { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import _data from '../data/progress-reimu'
import { NextComponentType } from "next"

const ProgressChart: NextComponentType = () => {
  const chartDOM = useRef<HTMLDivElement>(null)
  const chartDOM1 = useRef<HTMLDivElement>(null)
  const chartDOM2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    var myChart = chartDOM.current ? echarts.init(chartDOM.current) : null

    const data = {
      timeline: _data.map(r => r.time),
      item: ["新規投票数","新規一押し票","総投票数","総一押し票数"],
      data: [
        _data.map(r => r.count),
        _data.map(r => r.primary),
        _data.map(r => r.total),
        _data.map(r => r.primary_total),
      ]
    }

    const option: echarts.EChartsOption = {
      tooltip : {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: data.item,
        left: 50,
        top: 50,
      },
      grid: {
        top: 100
      },
      toolbox: {
        show: true,
        top: 50,
        feature: {
          dataZoom: {},
          magicType: {type: ['line', 'bar']},
          restore: {}
        }
      },
      xAxis : [
        {
          type: 'category',
          boundaryGap: false,
          data : data.timeline
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      dataZoom: [
        {
          type: 'slider',
          show: true,
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: 0,
        }
      ],
      series: [
        {
          name: data.item[0],
          type: 'line',
          data: data.data[0],
        },
        {
          name: data.item[1],
          type: 'line',
          data: data.data[1],
        },
        {
          name: data.item[2],
          type: 'line',
          data: data.data[2],
        },
        {
          name: data.item[3],
          type: 'line',
          data: data.data[3],
        },
      ]
    };

    myChart && myChart.setOption(option)
  }, [chartDOM])

  useEffect(() => {
    var myChart = chartDOM1.current ? echarts.init(chartDOM1.current) : null

    const data = {
      timeline: _data.map(r => r.time),
      item: ["新規投票数","新規一押し票"],
      data: [
        _data.map(r => r.count),
        _data.map(r => r.primary),
      ]
    }

    const option: echarts.EChartsOption = {
      tooltip : {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: data.item,
        left: 50,
        top: 50,
      },
      grid: {
        top: 100
      },
      toolbox: {
        show: true,
        top: 50,
        feature: {
          dataZoom: {},
          magicType: {type: ['line', 'bar']},
          restore: {}
        }
      },
      xAxis : [
        {
          type: 'category',
          boundaryGap: false,
          data : data.timeline
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      dataZoom: [
        {
          type: 'slider',
          show: true,
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: 0,
        }
      ],
      series: [
        {
          name: data.item[0],
          type: 'line',
          data: data.data[0],
        },
        {
          name: data.item[1],
          type: 'line',
          data: data.data[1],
        },
      ]
    };

    myChart && myChart.setOption(option)
  }, [chartDOM1])

  useEffect(() => {
    var myChart = chartDOM2.current ? echarts.init(chartDOM2.current) : null

    const data = {
      timeline: _data.map(r => r.time),
      item: ["総投票数","総一押し票数"],
      data: [
        _data.map(r => r.total),
        _data.map(r => r.primary_total),
      ]
    }

    const option: echarts.EChartsOption = {
      tooltip : {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: data.item,
        left: 50,
        top: 50,
      },
      grid: {
        top: 100
      },
      toolbox: {
        show: true,
        top: 50,
        feature: {
          dataZoom: {},
          magicType: {type: ['line', 'bar']},
          restore: {}
        }
      },
      xAxis : [
        {
          type: 'category',
          boundaryGap: false,
          data : data.timeline
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      dataZoom: [
        {
          type: 'slider',
          show: true,
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: 0,
        }
      ],
      series: [
        {
          name: data.item[0],
          type: 'line',
          data: data.data[0],
          areaStyle: {},
        },
        {
          name: data.item[1],
          type: 'line',
          data: data.data[1],
          areaStyle: {},
        },
      ]
    };

    myChart && myChart.setOption(option)
  }, [chartDOM2])

  return (
    <>
      <section>
        <h2>投票数の時間経過グラフ</h2>
        <p><a href="http://touhou.vote/v9/api.php?action=make&object=votedate&text=chara&id=1">霊夢の詳細ページ</a>にある「投票人数变化」のクローンです。</p>
        <div ref={chartDOM} style={{width: "100%", height: 400}}></div>
      </section>

      <section>
        <h2>2つに分けて重ねたら見やすいかも</h2>
        <div ref={chartDOM1} style={{width: "100%", height: 400}}></div>
        <div ref={chartDOM2} style={{width: "100%", height: 400}}></div>
      </section>
    </>
  )
}

export default ProgressChart

import type { NextPage } from 'next'
import ProgressChart from '../components/ProgressChart'

const Home: NextPage = () => {

  return (
    <main>
      <h1>東方人気投票グラフチャレンジ</h1>
      <p><a href="https://echarts.apache.org/">echarts</a>を使ってグラフを描いてみます。</p>

      <ProgressChart/>
    </main>
  )
}

export default Home

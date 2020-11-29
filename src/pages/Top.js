import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'
const Top = () => {
    const { globalState, setGlobalState } = useContext(Store) //分割代入

    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data', res)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        /* <Layout>で包むことで囲われたDOMがチルドレンノードとしてLayoutコンポーネントに渡される */
        <Layout>
         <VideoGrid>
           {
               globalState.popular && globalState.popular.map((popular) => { //map関数を使ってpopularをループ、リストの中から一つ一つ要素を受取videoGridに渡していく
                   return (
                       <VideoGridItem
                        id={popular.id} //動画を一意に識別するために YouTube によって使用される ID
                        key={popular.id} //動画を一意に識別するために YouTube によって使用される ID
                        src={popular.snippet.thumbnails.default.url} //画像のurl
                        title={popular.snippet.title} //動画のタイトル
                        />
                   )
               })
           }
         </VideoGrid>
        </Layout>
    )
}

export default Top
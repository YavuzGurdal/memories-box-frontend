import React, { useEffect } from 'react'
import { Spinner, Row, Col } from 'react-bootstrap'
import Memory from '../components/Memory'

// import { fetchMemories } from '../axios' // redux dan once

import { useDispatch, useSelector } from 'react-redux'
// useDispatch action lara ulasmak icin. useSelector state lere ulasmak icin
import { fetchMemories } from '../actions/memoryActions.js'

const HomeScreen = () => {
    /* bu kisim redux dan once bu sekildeydi*/
    // const [memories, setMemories] = useState([])

    // useEffect(() => {
    //     const getMemories = async () => {
    //         // const response = await fetchMemories() // await koymak gerekiyor. cunku islem az da olsa zaman aliyor
    //         // console.log(response.data)

    //         // bu yukaridaki ile ayni. {} icinde yazip gelen degerlerden istedigimi direk alabilirim
    //         const { data } = await fetchMemories() // await koymak gerekiyor. cunku islem az da olsa zaman aliyor
    //         console.log(data)

    //         setMemories(data)
    //     }
    //     getMemories() // fonksiyonu burda calistirmak gerekiyor
    // }, [])

    /* redux kismi */
    const dispatch = useDispatch()

    const memories = useSelector((state) => state.memories) // global state teki memories'i bu sekilde aliyorum
    // useSelector ile global state'deki istedigim state'e ulasabilirim

    useEffect(() => {
        //if (!memories[0]) { // yeni ekleyince db ye hemen eklenmeyebiliyor o yuzden db den degil state den islem yapiyorum 
        dispatch(fetchMemories()) // fetchMemories action'unu calistiriyorum
        //}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h1>Latest Memories</h1>

            {
                !memories.length ?
                    <Spinner animation='border' />
                    :
                    <Row>
                        {
                            memories.map((memory) => ( // Memory componentine her bir memory'yi propsla gonderiyorum
                                <Col key={memory._id} className='m-auto' sm={12} md={6} lg={4} xl={3}>
                                    <Memory memory={memory} />
                                </Col>
                            ))
                        }
                    </Row>
            }
        </>
    )
}

export default HomeScreen

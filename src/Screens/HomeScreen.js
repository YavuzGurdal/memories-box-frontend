import React, { useState, useEffect } from 'react'
import { Spinner, Row, Col } from 'react-bootstrap'
import Memory from '../components/Memory'

import { fetchMemories } from '../axios'

const HomeScreen = () => {
    const [memories, setMemories] = useState([])

    useEffect(() => {
        const getMemories = async () => {
            // const response = await fetchMemories() // await koymak gerekiyor. cunku islem az da olsa zaman aliyor
            // console.log(response.data)

            // bu yukaridaki ile ayni. {} icinde yazip gelen degerlerden istedigimi direk alabilirim
            const { data } = await fetchMemories() // await koymak gerekiyor. cunku islem az da olsa zaman aliyor
            console.log(data)

            setMemories(data)
        }
        getMemories() // fonksiyonu burda calistirmak gerekiyor
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

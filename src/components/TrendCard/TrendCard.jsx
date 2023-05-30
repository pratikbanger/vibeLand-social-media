import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../Data/TrendData'

const TrendCard = () => {
    return (
        <div className="TrendCard">
            <h3>Trends of the Day!</h3>

            {TrendData.map((data) => {
                return (
                    <div key={data.id} className="trend">
                        <span><b>#{data.name}</b></span>
                        <span>{data.shares}k Shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard

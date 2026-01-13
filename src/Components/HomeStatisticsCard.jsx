
function HomeStatisticsCard({title, quantity, date}){
    return(
        <div className="statistics_card">
            <h2>{title}</h2>
            <h1>{quantity}</h1>
            <div className="last_update">
                <p>Actualizado</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default HomeStatisticsCard
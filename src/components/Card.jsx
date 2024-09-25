const colors = {
    "Ar": "#87c1cb",
    "Água": "#0070ff",
    "Solo": "#997c50",
    "Desmatamento": "#ff6000"
 }

export const Card = ({title, message}) => {
    return <div className="card-container">
        <div   className="card-title">{title}</div>
        <div>{message}</div>
    </div>
}
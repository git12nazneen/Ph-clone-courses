import Card from "../../Components/Card/Card";


const Conceptual = ({conceptual}) => {
    return (
        <div>
             {
               conceptual.map(cardData => <Card
                key={cardData.title}
                cardData={cardData}
                ></Card>)
            }
        </div>
    );
};

export default Conceptual;
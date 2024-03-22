import Card from "../../Components/Card/Card";


const Level2 = ({level2}) => {
    return (
        <div>
             {
                level2.map(cardData => <Card
                key={cardData.title}
                cardData={cardData}
                ></Card>)
            }
        </div>
    );
};

export default Level2;
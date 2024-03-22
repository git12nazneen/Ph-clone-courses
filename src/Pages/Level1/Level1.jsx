import Card from "../../Components/Card/Card";


const Level1 = ({level1}) => {
    return (
        <div>
            {
                level1.map(cardData => <Card
                key={cardData.title}
                cardData={cardData}
                ></Card>)
            }
        </div>
    );
};

export default Level1;
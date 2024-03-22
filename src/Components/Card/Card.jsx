

const Card = ({cardData}) => {
    console.log(cardData)
    return (
        <div>
            <div className="card card-side bg-base-300 shadow-xl w-2/3 m-10">
  <figure><img className="w-80 h-80" src={cardData.thumnbail} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cardData.title}</h2>
    <p>{cardData.owner}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;
import {Card} from "antd";

function NewCard(props) {

  const { itemId } = props

  return (
    <div>
        <Card
          title={
              <div className="flex items-center gap-3">
                  <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${itemId}.png`}/>
                  <span>Bitcoin</span>
              </div>
          }
          style={{
            width: 300,
          }}
        >
          <p>Item ID: {itemId}</p>
        </Card>
    </div>
  )
}

export default NewCard
import { TickerTape } from "react-tradingview-embed";

function Ticker() {
  return (
    <>
        <TickerTape   widgetProps={{"theme": "light", isTransparent: true ,displayMode: "regular"}} />
    </>
  )
}

export default Ticker
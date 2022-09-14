import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "./redux/app/store"
import { addPancake, sellPancake } from "./redux/features/Pancake"
import { addIceCream, sellIceCream } from "./redux/features/iceCream"
export default function App() {
  const { value: pancakes } = useSelector((state: RootState) => state.panckake)
  const { value: iceCreams } = useSelector((state: RootState) => state.iceCream)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <h1>pancake : {pancakes}</h1>
        <div>
          <button onClick={() => dispatch(addPancake({ pancakes, value: 5 }))}>+1</button>
          <button onClick={() => dispatch(sellPancake())}>-1</button>
        </div>
      </div>
      <div>
        <h1>ice cream : {iceCreams}</h1>
        <div>
          <button onClick={() => dispatch(addIceCream())}>+1</button>
          <button onClick={() => dispatch(sellIceCream())}>-1</button>
        </div>
      </div>
    </div>
  )
}

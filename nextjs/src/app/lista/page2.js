'use client';

export default function lista () {
  const onInputChange = (ev) => {
    itemName = ev.target.value
    console.log('itemName', itemName)
  }
  const handleclic

  return (
    <>
    <h1>Lista</h1>
    <div>
      <input name="item" onChange={onInputChange}/>
      <button onClick=(handleCLick)>Adicionar</button>
    </div>
    <div>
      <h3>itens</h3>
      <ul>
          {lista.map((item)} => {
              return ()
          }
      </ul>
    </div>
  </>
  )
}
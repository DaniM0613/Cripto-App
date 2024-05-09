


export default function CriptoSearchForm() {
  return (
    <form
      className="form"
    >

      <div className="field">
         <label htmlFor="currency">Moneda: </label>
         <select
            name="currency"
            id="currency"
         >
           <option value=''>-- Seleccione --</option>
         </select>
      </div>

      <div className="field">
         <label htmlFor="Criptomoneda">Criptomoneda: </label>
         <select
            name="Criptomoneda"
            id="Criptomoneda"
         >
           <option value=''>-- Seleccione --</option>
         </select>
      </div>

      <input type='submit' value='cotizar'/>
    </form>
  )
}

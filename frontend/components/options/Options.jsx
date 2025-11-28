import "./options.css";
function Options({showOptions}) {
  const bleu = "blue";
  const vert = "green";
  const violet = "blueviolet";
  const handleChange=(e)=>{
    console.log(e);
    
  }
  return (
    <section className={showOptions? "options-container active":"options-container"}>
      <div>Options</div>
      <ul className="options-ul" >
        <button type="radio" name="color" className="options-li" style={{backgroundColor: bleu}}>Bleu</button>
        <button type="radio" name="color" className="options-li" style={{backgroundColor: vert}}>Vert</button>
        <button type="radio" name="color" className="options-li" style={{backgroundColor: violet}}>violet</button>
      </ul>
    </section>
  )
}

export default Options;
// <img src={rose_fleche} className={`rose-fleche rotate-${wind_direction}`} alt="fleche" />

    // @for $i from 0 through 360{
    //   &.rotate-#{$i}{
    //     transform: rotate(#{$i}deg);
    //   }
    // }
export default function Input({firstname, placeholder}) {
    return (
      <>
        <div className="input_page">
          <label htmlFor="" className="input_label">{firstname}</label>
          <input type="{input_type}" placeholder={placeholder} className="input_box"  />
        </div>
      </>
    );
}




<input type="text" />
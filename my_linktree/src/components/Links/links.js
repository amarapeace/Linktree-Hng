

export default function Links({href, text, idd}) {
  return (
    <div className="linkdiv">
      <a href={href} className="mylinks" target="blank" id={idd}>{text}</a>
    </div>
  );
}

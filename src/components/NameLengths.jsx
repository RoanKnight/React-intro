export default function NameLengths (props) {
  return (
    <h1>The name {props.name} contains {props.name.length} letters and they are {props.age} years old. They are also a {props.occupation.title} of {props.occupation.years} years</h1>
  );
}
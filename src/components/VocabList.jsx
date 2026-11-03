export default function VocabList({words}) {
  const items = words.map(word =>
    <li key={word.id}>
      {word.danish} = {word.english}
    </li>
  );
  return (
    <ul>{items}</ul>
  )
}
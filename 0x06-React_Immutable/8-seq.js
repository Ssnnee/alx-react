import { seq } from 'immutable';

export default function printBestStudents(obj) {
  const toPrint = seq(obj).filter((student) => student.score > 70).map((student) => student.name).join('\n');
  console.log(toPrint);
}
